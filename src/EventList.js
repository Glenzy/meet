import React from "react";
import Event from "./Event";

const EventList = ({ events }) => {
  if (!events) return null;
  return (
    <ul className="EventList">
      {events.map((event) => (
        <li key={event.id}>
          <Event event={event} />
        </li>
      ))}
    </ul>
  );
};

export default EventList;
