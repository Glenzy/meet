const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar("v3");
const functions = require("firebase-functions");

const googleCredentials = require("./credentials.json");
const calendar_id = "fullstackwebdev@careerfoundry.com";
const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];
const ERROR_RESPONSE = {
  status: "500",
  message: "There was an error getting events from your Google calendar",
};

/**
 * 
 * Step 1 in the OAuth Process is we need to generate a URL so users can login with 
 * Google and be authorised to see our calendar. After logging in they will receive a code in
 * as a URL parameter.
 * 
 */

exports.getAuthURL = functions.https.onRequest((request, response) => {
  const oAuth2Client = new google.auth.OAuth2(
    googleCredentials.web.client_id,
    googleCredentials.web.client_secret,
    googleCredentials.web.redirect_uris[1]
  );
  return new Promise((resolve) => {
    resolve(
      oAuth2Client.generateAuthUrl({
        access_type: "offline",
        scope: SCOPES,
      })
    );
  }).then((data) => {
      response.status(200).send(data);
      return;
    })
    .catch((err) => {
      console.error("Error adding event: " + err.message);
      response.status(500).send(ERROR_RESPONSE);
      return;
    });
});

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

exports.getAccessToken = functions.https.onRequest((request, response, ) => {
  const oAuth2Client = new google.auth.OAuth2(
    googleCredentials.web.client_id,
    googleCredentials.web.client_secret,
    googleCredentials.web.redirect_uris[1]
  );
  // Get authorization code from request query
  const code = request.query.code;

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
      response.cookie('access_token', JSON.stringify(token));
      response.status(200).send(JSON.stringify(token));
    })
    .catch((err) => {
      // Handle error
      console.error(err);
      response.status(500).send(err);
    });
});

/**
 * 
 * Step 3 - we now have our access token, which means we now have access to the calendar events. So step 3 
 * is where we access the Google Calendar API and retrieve our calendar from CF's "fullstackwebdev@careerfoundry.com"
 * calendar. 
 * Note that it uses the calendar.events.list? We declared "calendar" at the top of the file.
 * This is the Google Calendar API, it uses the same Promise -> if successful it resolves, else if it's unsuccessful it 
 * will reject and send back an error. 
 */


exports.getCalendarEvents = functions.https.onRequest((request, response) => {
  const oAuth2Client = new OAuth2(
    googleCredentials.web.client_id,
    googleCredentials.web.client_secret,
    googleCredentials.web.redirect_uris[0]
  );
 const access_token = request.query.access_token;

  oAuth2Client.setCredentials({access_token});

  return new Promise((resolve, reject) => {
    calendar.events.list(
      {
        calendarId: calendar_id,
        auth: oAuth2Client,
      },
      (error, response) => {
        if (error) {
          reject(error);
        }
        resolve(response.data);
      }
    );
  }).then((data) => {
      response.status(200).send({events:data});
      return;
    })
    .catch((err) => {
      console.error("Error adding event: " + err.message);
      response.status(500).send(ERROR_RESPONSE);
      return;
    });
});