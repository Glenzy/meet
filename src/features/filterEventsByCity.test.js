import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import { mockEvents } from "../mock-events";
import { extractLocations } from "../api";
import CitySearch from "../CitySearch";

const feature = loadFeature("./src/features/filterEventsByCity.feature");
const locations = extractLocations(mockEvents);

defineFeature(feature, (test) => {
  test("By default, when user hasn’t searched for a city, show upcoming events based on the user’s location", ({
    given,
    when,
    then,
  }) => {
    given("user hasn’t searched for any city", () => {});
    let AppWrapper;
    when("the user opens the app", () => {
      AppWrapper = mount(<App />);
    });
    then(
      "the user should see the list of upcoming events from their location",
      () => {
        AppWrapper.update();
        expect(AppWrapper.find(".event")).toHaveLength(mockEvents.length);
      }
    );
  });

  test("User should see a list of suggestions when they search for a city", ({
    given,
    when,
    then,
  }) => {
    let CitySearchWrapper;
    given("the main page is open", () => {
      CitySearchWrapper = shallow(<CitySearch locations={locations} />);
    });
    when("user starts typing in the city textbox", () => {
      CitySearchWrapper.find(".city").simulate("change", {
        target: { value: "Munich" },
      });
    });
    then(
      "the user should receive a list of cities (suggestions) that match what they’ve typed",
      () => {
        expect(CitySearchWrapper.find(".suggestions li")).toHaveLength(1);
      }
    );
  });

  test("User can select a city from the suggested list", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user was typing “Munich” in the city textbox", () => {});
    and("the list of suggested cities is showing", () => {});
    when(
      "the user selects a city (e.g., “Munich, Germany”) from the list",
      () => {}
    );
    then(
      "their city should be changed to that city (i.e., “Munich, Germany”)",
      () => {}
    );
    and(
      "the user should receive a list of upcoming events in that city",
      () => {}
    );
  });
});
