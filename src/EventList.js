import React, { Component } from "react";
import Event from "./Event";

class EventList extends Component {
  render() {
    console.log(this.props);
    return (
      <ul className="EventList">
        {this.props.events.map((event) => (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
    );
  }
}

export default EventList;
