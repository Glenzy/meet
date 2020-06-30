import React, { useState } from "react";

function ChooseCity({ updateEvents, locations }) {
  const [isSelected, setSelected] = useState("all");

  const setEvents = (location, event) => {
    updateEvents(location);
    console.log(event.target);
    return setSelected(event.target.name);
  };

  return (
    <div className="button-wrapper">
      {locations.map((location, index) => {
        return (
          <button
            className={`chooseCity ${
              isSelected === location ? "isSelected" : ""
            }`}
            key={index}
            onClick={(event) => setEvents(location, event)}
            name={location}
          >
            {location}
          </button>
        );
      })}
      <button
        className={`chooseCity ${isSelected === "all" ? "isSelected" : ""}`}
        onClick={(event) => setEvents("all", event)}
        name="all"
      >
        All locations
      </button>
    </div>
  );
}

export default ChooseCity;
