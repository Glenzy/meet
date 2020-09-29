import { mockEvents } from "./mock-events";
import NProgress from "nprogress";
import axios from "axios";

/**
 * 
 */
const removeQuery = () => {
  if (window.history.pushState && window.location.pathname) {
    var newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname;
    window.history.pushState("", "", newurl);
  } else {
    newurl = window.location.protocol + "//" + window.location.host;
    window.history.pushState("", "", newurl);
  }
};

const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .catch((error) => error.json());

  return result.error ? false : true;
};
/**
 *
 * @param {*} events:
 * The following function is to be in api.js.
 * This function takes an events array, then uses map to create a new array with only locations.
 * Lastly, we remove all duplicates by creating another new array by using the spread operator and spreading a Set.
 * The Set removes all duplicates from the array
 */
const extractLocations = (events) => {
  var extractLocatins = events.map((event) => event.location);
  var locations = [...new Set(extractLocatins)];
  return locations;
};

const getEvents = async (max_results = 32) => {
  NProgress.start();

  if (window.location.href.startsWith("http://localhost")) {
    NProgress.done();
    return { events: mockEvents, locations: extractLocations(mockEvents) };
  }
  if (!navigator.onLine) {
    const { events } = await localStorage.getItem("lastEvents");
    NProgress.done();
    
    return { events: JSON.parse(events), locations: extractLocations(events) };
  }

  const token = await getAccessToken();

  if (token) {
    removeQuery();
    const url = `https://f1k17pnw2a.execute-api.us-east-1.amazonaws.com/dev/api/get-events/${token}/${max_results}`;
    const result = await axios.get(url);
    if (result.data) {
      var locations = extractLocations(result.data.events);
      localStorage.setItem("lastEvents", JSON.stringify(result.data.events));
      localStorage.setItem("locations", JSON.stringify(locations));
    }
    NProgress.done();
    return { events: result.data.events, locations };
  }
};

const getAccessToken = async () => {
  const accessToken = await localStorage.getItem("access_token");
  const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || !tokenCheck) {
    await localStorage.removeItem("access_token");
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get("code");
    if (!code) {
      const results = await axios.get(
        "https://f1k17pnw2a.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url"
      );
      const { authUrl } = results.data;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
};

const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code);
  const { access_token } = await fetch(
    `https://f1k17pnw2a.execute-api.us-east-1.amazonaws.com/dev/api/token/${encodeCode}`
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => error);

  access_token && localStorage.setItem("access_token", access_token);

  return access_token;
};

export { getEvents, getAccessToken, extractLocations, getToken, checkToken  };
