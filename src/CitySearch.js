import React, { useState, useEffect, useRef } from "react";
import { InfoAlert } from "./Alert";

const CitySearch = ({ updateEvents, locations }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState(locations);
  const [searchVal, setSearchVal] = useState("");
  const [infoText, setInfoText] = useState("");
  const suggestionList = useRef();

  useEffect(() => {
    if (searchVal.length > 0 && suggestions.length === 0) {
      setInfoText(
        "We can not find the city you are looking for. Please try another city"
      );
    } else {
      setInfoText("");
    }
  }, [suggestions, searchVal.length]);

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClickOutside);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setShowSuggestions(true);
    setSearchVal(value);
    setSuggestions(
      locations.filter(
        (location) => location.toUpperCase().indexOf(value.toUpperCase()) > -1
      )
    );
  };

  const handleClickOutside = (event, suggestion) => {
    if (suggestionList.current.contains(event.target)) {
      // inside click
      console.log("EVENT", suggestion);
      return updateEvents(suggestion);
    }
    return setShowSuggestions(false);
  };

  return (
    <div className="CitySearch">
      <InfoAlert text={infoText} />
      <h4>City Search</h4>
      <label>
        City:
        <input
          type="text"
          className="city"
          value={searchVal}
          onChange={(event) => handleInputChanged(event)}
        />
      </label>
      <ul
        className={
          showSuggestions ? "suggestions showSuggestions" : "display-none"
        }
        ref={suggestionList}
      >
        {suggestions.map((suggestion) => (
          <li
            key={suggestion}
            onClick={(event) => handleClickOutside(event, suggestion)}
          >
            {suggestion}
          </li>
        ))}
        <li onClick={(event) => handleClickOutside(event, "all")}>
          <b>See all cities</b>
        </li>
      </ul>
    </div>
  );
};

export default CitySearch;
