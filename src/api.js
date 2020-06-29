import { mockEvents } from "./mock-events";
import axios from "axios";

async function getSuggestions(query) {
  if (window.location.href.startsWith("http://localhost")) {
    return [
      {
        kind: "calendar#event",
        etag: 3181161784712000,
        id: "4eahs9ghkhrvkld72hogu9ph3e_20200625T140000Z",
        status: "confirmed",
        htmlLink:
          "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MjVUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        created: "2020-05-19T19:17:46.000Z",
        updated: "2020-05-27T12:01:32.356Z",
        summary: "Learn JavaScript",
        description:
          "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) nnJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        location: "London, UK",
        creator: { email: "fullstackwebdev@careerfoundry.com", self: true },
        organizer: {
          email: "fullstackwebdev@careerfoundry.com",
          self: true,
        },
        start: {
          dateTime: "2020-06-25T16:00:00+02:00",
          timeZone: "Europe/Berlin",
        },
        end: {
          dateTime: "2020-06-25T17:00:00+02:00",
          timeZone: "Europe/Berlin",
        },
        recurringEventId: "4eahs9ghkhrvkld72hogu9ph3e",
        originalStartTime: {
          dateTime: "2020-06-25T16:00:00+02:00",
          timeZone: "Europe/Berlin",
        },
        iCalUID: "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        sequence: 0,
        reminders: { useDefault: true },
      },
      {
        kind: "calendar#event",
        etag: 3181159875584000,
        id: "3qtd6uscq4tsi6gc7nmmtpqlct_20200626T120000Z",
        status: "confirmed",
        htmlLink:
          "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MjZUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        created: "2020-05-19T19:14:30.000Z",
        updated: "2020-05-27T11:45:37.792Z",
        summary: "React is Fun",
        description:
          "Love HTML, CSS, and JS? Want to become a cool front-end developer? nnReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. nnJoin us in our free React training sessions and give your career a new direction. ",
        location: "Berlin, Germany",
        creator: { email: "fullstackwebdev@careerfoundry.com", self: true },
        organizer: {
          email: "fullstackwebdev@careerfoundry.com",
          self: true,
        },
        start: {
          dateTime: "2020-06-26T14:00:00+02:00",
          timeZone: "Europe/Berlin",
        },
        end: {
          dateTime: "2020-06-26T15:00:00+02:00",
          timeZone: "Europe/Berlin",
        },
        recurringEventId: "3qtd6uscq4tsi6gc7nmmtpqlct",
        originalStartTime: {
          dateTime: "2020-06-26T14:00:00+02:00",
          timeZone: "Europe/Berlin",
        },
        iCalUID: "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        sequence: 0,
        reminders: { useDefault: true },
      },
    ];
  }

  const token = await getAccessToken();
  if (token) {
    return getEvents(32);
  }
  return [];
}

async function getEvents(max_results = 5) {
  if (window.location.href.startsWith("http://localhost")) {
    return mockEvents;
  }
  if (!navigator.onLine) {
    const events = localStorage.getItem("lastEvents");
    return JSON.parse(events);
  }
  const token = await getAccessToken();

  if (token) {
    console.log(token);
    const url = `https://f1k17pnw2a.execute-api.us-east-1.amazonaws.com/dev/api/get-events/${token}/${max_results}`;
    const result = await axios.get(url);
    const { events } = result.data;
    console.log("events", JSON.stringify(events));
    if (result.data) {
      localStorage.setItem("lastEvents", JSON.stringify(events));
    }
    return events;
  }
}

const getAccessToken = async () => {
  const accessToken = await localStorage.getItem("access_token");
  const { error } = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  ).then((res) => res.json());

  if (!accessToken || error === "invalid_token") {
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get("code");

    if (!code) {
      const results = await axios.get(
        "https://f1k17pnw2a.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url"
      );
      const { authUrl } = results.data;
      return (window.location.href = authUrl);
    }
    return getToken(code);
  }

  const lastSavedTime = localStorage.getItem("last_saved_time");

  if (accessToken && Date.now() - lastSavedTime < 3600000) {
    return accessToken;
  }
};

const getToken = async (code) => {
  console.log("GET TOKEN", code);
  const encodeCode = encodeURIComponent(code);
  const { access_token } = await fetch(
    `https://f1k17pnw2a.execute-api.us-east-1.amazonaws.com/dev/api/token/${encodeCode}`
  ).then((res) => {
    return res.json();
  });
  access_token && localStorage.setItem("access_token", access_token);
  access_token && localStorage.setItem("last_saved_time", Date.now());

  return access_token;
};

export { getSuggestions, getEvents, getAccessToken };
