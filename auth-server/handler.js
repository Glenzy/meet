const axios = require("axios");
const { google } = require("googleapis");

/**
 * SCOPES allows you to set access levels, we will only use readonly because we don't have access rights to
 * update the calendar ourselves. More Info: https://developers.google.com/identity/protocols/oauth2/scopes
 */
const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

/**
 * credentials are all the values required to get access to our calendar. If you see process.env this means
 * the value is in a .env file. This is a best practice as it keeps api secrets hidden. Please remember to add .env to your .gitignore
 */
const credentials = {
  client_id: process.env.CLIENT_ID,
  project_id: process.env.PROJECT_ID,
  client_secret: process.env.CLIENT_SECRET,
  calendar_id: process.env.CALENDAR_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  redirect_uris: ["https://glenzy.github.io/meetup/"],
  javascript_origins: ["https://glenzy.github.io", "http://localhost:3000"],
};
const { client_secret, client_id, redirect_uris } = credentials;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);
/**
 * This function generates a url using the googleapis package. We will use this url to redirect our users
 * so they can log in to Google and get access to the calendar data.
 */
module.exports.getAuthURL = async () => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      authUrl: authUrl,
    }),
  };
};

/**
 * We use the code received after logging in to request an access token before we can access the calendar API.
 * To note here we receive form Google an encoded URI code, so we need to decode it before tyring to use it.
 * Read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 */

module.exports.getAccessToken = async (event) => {
  const code = decodeURIComponent(event.pathParameters.code);
  return oAuth2Client.getToken(code, (error, token) => {
    if (error) {
      return {
        statusCode: error.response.status,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ error: error.response.data }),
      };
    }
    console.log("HEY", {
      access_token: token.access_token,
      scope: token.scope,
      token_type: token.token_type,
      expiry_date: token.expiry_date,
    });
    console.log("#########", token);
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        access_token: token.access_token,
        scope: token.scope,
        token_type: token.token_type,
        expiry_date: token.expiry_date,
      }),
    };
  });
};
