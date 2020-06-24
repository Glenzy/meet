import { mockEvents } from "./mock-events";
import axios from "axios";

async function getSuggestions(query) {
  if (window.location.href.startsWith("http://localhost")) {
    return [
      {
        kind: "calendar#event",
        etag: '"3181159875584000"',
        id: "3qtd6uscq4tsi6gc7nmmtpqlct_20200622T120000Z",
        status: "confirmed",
        htmlLink:
          "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        created: "2020-05-19T19:14:30.000Z",
        updated: "2020-05-27T11:45:37.792Z",
        summary: "React is Fun",
        description:
          "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        location: "Berlin, Germany",
        creator: {
          email: "fullstackwebdev@careerfoundry.com",
          self: true,
        },
        organizer: {
          email: "fullstackwebdev@careerfoundry.com",
          self: true,
        },
        start: {
          dateTime: "2020-06-22T14:00:00+02:00",
          timeZone: "Europe/Berlin",
        },
        end: {
          dateTime: "2020-06-22T15:00:00+02:00",
          timeZone: "Europe/Berlin",
        },
        recurringEventId: "3qtd6uscq4tsi6gc7nmmtpqlct",
        originalStartTime: {
          dateTime: "2020-06-22T14:00:00+02:00",
          timeZone: "Europe/Berlin",
        },
        iCalUID: "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        sequence: 0,
        reminders: {
          useDefault: true,
        },
      },
    ];
  }

  const token = await getAccessToken();
  if (token) {
    const url =
      "https://api.meetup.com/find/locations?&sign=true&photo-host=public&query=" +
      query +
      "&access_token=" +
      token;
    const result = await axios.get(url);
    return result.data;
  }
  return [];
}

async function getEvents(lat, lon, page) {
  if (window.location.href.startsWith("http://localhost")) {
    return mockEvents;
  }
  if (!navigator.onLine) {
    const events = localStorage.getItem("lastEvents");
    return JSON.parse(events);
  }
  const token = await getAccessToken();
  if (token) {
    let url =
      "https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public" +
      "&access_token=" +
      token;
    if (lat && lon) {
      url += "&lat=" + lat + "&lon=" + lon;
    }

    if (page) {
      url += "&page=" + page;
    }

    const result = await axios.get(url);
    const events = result.data;
    if (result.data) {
      localStorage.setItem("lastEvents", JSON.stringify(events));
    }
    return events;
  }
}

function getAccessToken() {
  const accessToken = localStorage.getItem("access_token");

  if (!accessToken) {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");

    if (!code) {
      window.location.href =
        "https://secure.meetup.com/oauth2/authorize?client_id=agnddpc62mkv02tllq39qastam&response_type=code&redirect_uri=https://tetateuta.github.io/meetup22/";
      return null;
    }
    return getOrRenewAccessToken("get", code);
  }

  const lastSavedTime = localStorage.getItem("last_saved_time");

  if (accessToken && Date.now() - lastSavedTime < 3600000) {
    return accessToken;
  }

  const refreshToken = localStorage.getItem("refresh_token");
  return getOrRenewAccessToken("renew", refreshToken);
}

async function getOrRenewAccessToken(type, key) {
  let url;
  if (type === "get") {
    url =
      "https://c5mxn1sefk.execute-api.eu-central-1.amazonaws.com/dev/api/token/" +
      key;
  } else if (type === "renew") {
    url =
      "https://c5mxn1sefk.execute-api.eu-central-1.amazonaws.com/dev/api/refresh_token/" +
      key;
  }
  const tokenInfo = await axios.get(url);
  localStorage.setItem("access_token", tokenInfo.data.access_token);
  localStorage.setItem("refresh_token", tokenInfo.data.refresh_token);
  localStorage.setItem("last_saved_time", Date.now());

  return tokenInfo.data.access_token;
}

export { getSuggestions, getEvents, getAccessToken };
