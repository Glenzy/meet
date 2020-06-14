/*
 * A Firebase Cloud Function that uses Google OAuth2 to
 * manage a Google user's calendar.
 *
 * @Author: Scott McCartney
 * @Twitter: @skittlesMc9
 * @Github: https://github.com/scott-mccartney/google-calendar-cloud-function
 */
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar("v3");
const functions = require("firebase-functions");

const googleCredentials = require("./credentials.json");
const calendar_id = "fullstackwebdev@careerfoundry.com";
const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];
const ERROR_RESPONSE = {
  status: "500",
  message: "There was an error events from your Google calendar",
};

function getEvents(auth) {
  return new Promise((resolve, reject) => {
    calendar.events.list(
      {
        calendarId: calendar_id,
        auth: auth,
      },
      (err, res) => {
        if (err) {
          console.log("Rejecting because of error");
          reject(err);
        }
        console.log("Request successful");
        resolve(res.data);
      }
    );
  });
}

exports.getCalendarEvents = functions.https.onRequest((request, response) => {
  const oAuth2Client = new OAuth2(
    googleCredentials.web.client_id,
    googleCredentials.web.client_secret,
    googleCredentials.web.redirect_uris[0]
  );

  oAuth2Client.setCredentials({
    refresh_token: googleCredentials.refresh_token,
  });

  getEvents(oAuth2Client)
    .then((data) => {
      response.status(200).send(data);
      return;
    })
    .catch((err) => {
      console.error("Error adding event: " + err.message);
      response.status(500).send(ERROR_RESPONSE);
      return;
    });
});

function generateAuthURL(auth) {
  return new Promise((resolve) => {
    resolve(
      auth.generateAuthUrl({
        access_type: "offline",
        scope: SCOPES,
      })
    );
  });
}

exports.getAuthURL = functions.https.onRequest((request, response) => {
  const oAuth2Client = new google.auth.OAuth2(
    googleCredentials.web.client_id,
    googleCredentials.web.client_secret,
    googleCredentials.web.redirect_uris[1]
  );

  generateAuthURL(oAuth2Client)
    .then((data) => {
      response.status(200).send(data);
      return;
    })
    .catch((err) => {
      console.error("Error adding event: " + err.message);
      response.status(500).send(ERROR_RESPONSE);
      return;
    });
});

function getToken(code, auth) {
  return new Promise((resolve, reject) => {
    const { error, token } = auth.getToken(code, ({ error, token }) =>
      error ? error : token
    );
    token && resolve(token);
    error && reject(error);
  });
}

exports.getAccessToken = functions.https.onRequest((request, response) => {
  const oAuth2Client = new google.auth.OAuth2(
    googleCredentials.web.client_id,
    googleCredentials.web.client_secret,
    googleCredentials.web.redirect_uris[1]
  );
  const code = decodeURIComponent(request.body.code);

  getToken(code, oAuth2Client)
    .then((data) => {
      response.status(200).send(data);
      return;
    })
    .catch((err) => {
      console.error("Error adding event: " + err.message);
      response.status(500).send(ERROR_RESPONSE);
      return;
    });
});
