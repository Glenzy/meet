import React, { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { ErrorAlert } from "./Alert";

const NumberOfEvents = ({ updateEvents }) => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);
  const [infoText, setInfoText] = useState("");

  const handleInputChanged = (event) => {
    const value = event.target.value;
    updateEvents(null, value);
    setNumberOfEvents(value);

    if (value < 1) {
      setInfoText("Select number from 1 to 32");
    } else {
      setInfoText("");
    }
  };

  return (
    <div className="numberOfEvents">
      <label>Number of Events: </label>
      <DebounceInput
        type="text"
        id="numberOfEvents__input"
        debounceTimeout={300}
        value={numberOfEvents}
        onChange={handleInputChanged}
      />
      <ErrorAlert text={infoText} />
    </div>
  );
};

export default NumberOfEvents;
