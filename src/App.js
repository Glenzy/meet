import React, { Component } from "react";
import "./App.css";
import "./nprogress.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents } from "./api";
import { OfflineAlert } from "./Alert";
import moment from "moment";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

class App extends Component {
  componentDidMount() {
    getEvents().then((response) => {
      this.setState({ events: response.events, locations: response.locations });
    });
    //window.addEventListener("online", this.offLineAlert());
  }

  state = {
    events: [],
    page: null,
    currentLocation: "all",
    offlineText: "",
    numberOfEvents: 32,
    locations: [],
  };

  /*   offLineAlert = () => {
    if (navigator.onLine === false) {
      this.setState({
        offlineText:
          "You appear to be offline, this list is cached. Please connect to the internet for an updated list.",
      });
    } else {
      this.setState({
        offlineText: "",
      });
    }
  };
 */

  formatDate = (date) => moment(date).format("YYYY-MM-DD HH:mm");

  countEventsOnADate = (date) => {
    const count = this.state.events.filter(
      (event) => this.formatDate(event.start.dateTime) === date
    );
    return count.length;
  };

  getData = () => {
    const currentDate = moment().add(7, "d").format("YYYY-MM-DD HH:mm");

    const next7Days = this.state.events.filter((event) => {
      const eventDate = moment(event.start.dateTime).format("YYYY-MM-DD HH:mm");
      return eventDate <= currentDate;
    });

    const data = next7Days.map((event) => {
      const date = this.formatDate(event.start.dateTime);
      return { date, number: this.countEventsOnADate(date) };
    });

    return data;
  };

  updateEvents = (location, eventCount) => {
    const { currentLocation, numberOfEvents } = this.state;
    if (location) {
      getEvents().then((response) => {
        const locationEvents =
          location === "all"
            ? response.events
            : response.events.filter((event) => event.location === location);
        const events = locationEvents.slice(0, numberOfEvents);
        return this.setState({
          events: events,
          currentLocation: location,
        });
      });
    } else {
      getEvents().then((response) => {
        const locationEvents =
          currentLocation === "all"
            ? response.events
            : response.events.filter(
                (event) => event.location === currentLocation
              );
        const events = locationEvents.slice(0, eventCount);
        return this.setState({
          events: events,
          numberOfEvents: eventCount,
        });
      });
    }
  };

  render() {
    const { locations, numberOfEvents, offlineText, events } = this.state;
    return (
      <div className="App">
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
        <CitySearch updateEvents={this.updateEvents} locations={locations} />
        <OfflineAlert text={offlineText} />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={numberOfEvents}
        />
        <h4>Events in the next 7 days</h4>
        <ResponsiveContainer height={400}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid />
            <XAxis type="category" dataKey="date" name="date" />
            <YAxis
              allowDecimals={false}
              type="number"
              dataKey="number"
              name="number of events"
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="A school" data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
