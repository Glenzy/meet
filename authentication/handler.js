const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar("v3");
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
const { client_secret, client_id, redirect_uris, calendar_id } = credentials;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

/**
 *
 * Step 1 in the OAuth Process is we need to generate a URL so users can login with
 * Google and be authorised to see our calendar. After logging in they will receive a code in
 * as a URL parameter.
 *
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
 *
 * Step 2 in the OAuth Process is when we need to then use the code from step 1 to generate an access token.
 * We are expecting the code to be a URI parameter. If you remember in Achievement 2 where we were required to
 * access the query inside the request? This is the same method we use here.
 *
 * On each request we create a new oAuthClient. We then return a Promise.
 *
 * The Promise means we don't have the value yet, but we will soon. In this case oAuth2Client hasn't yet
 * generated the access token but it will. If it is successful it will return the token, or resolve the promise
 * by returning the token. If it is unsuccessful it will return the error, or reject the promise with an error.
 *
 * If successful, it will then run the ".then(token)" function and return the access_token to our users. If the promise was unsuccessful the ".catch(error)"
 * will be called and an error will be returned to our users.
 */

module.exports.getAccessToken = async (event) => {
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
  // Get authorization code from the url query
  const code = decodeURIComponent(`${event.pathParameters.code}`);

  return new Promise((resolve, reject) => {
    // OAuth2: Exchange authorization code for access token
    oAuth2Client.getToken(code, (err, token) => {
      if (err) {
        return reject(err);
      }
      return resolve(token);
    });
  })
    .then((token) => {
      // Respond with OAuth token stored as a cookie
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(token),
      };
      //response.cookie('access_token', JSON.stringify(token));
      //response.status(200).send(JSON.stringify(token));
    })
    .catch((err) => {
      // Handle error
      console.error(err);
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(err),
      };
    });
};

/**
 *
 * Step 3 - we now have our access token, which means we now have access to the calendar events. So step 3
 * is where we access the Google Calendar API and retrieve our calendar from CF's "fullstackwebdev@careerfoundry.com"
 * calendar.
 * Note that it uses the calendar.events.list? We declared "calendar" at the top of the file.
 * This is the Google Calendar API, it uses the same Promise -> if successful it resolves, else if it's unsuccessful it
 * will reject and send back an error.
 */

module.exports.getCalendarEvents = async (event) => {
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  /**
   * We decode the token passed as a query and force it to the string value
   */
  const access_token = decodeURIComponent(
    `${event.pathParameters.access_token}`
  );

  /**
   * This checks if max_results exists using '&&' and if it does it converts it to an int using 'parseInt'.
   * If max_results doesn't exist it will default to 32 using the 'OR' operator: '||'.
   */
  const max_results =
    (event.pathParameters.max_results &&
      parseInt(event.pathParameters.max_results, 10)) ||
    32;

  oAuth2Client.setCredentials({ access_token });

  return new Promise((resolve, reject) => {
    calendar.events.list(
      {
        calendarId: calendar_id,
        auth: oAuth2Client,
        timeMin: new Date().toISOString(),
        maxResults: max_results,
        singleEvents: true,
        orderBy: "startTime",
      },
      (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      }
    );
  })
    .then((results) => {
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          ...results.config.headers,
        },
        body: JSON.stringify({ events: results.data }),
      };
    })
    .catch((error) => {
      console.error("Error adding event: " + error);
      return {
        statusCode: 401,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(error.message),
      };
    });
};
