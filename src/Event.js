import React, { useState } from "react";
import moment from "moment";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Event = ({ event }) => {
  const { summary, location, start, htmlLink, description } = event;
  const [showDetails, setShowDetails] = useState(false);
  const eventStart = moment(start.dateTime, "YYYY-MM-DD HH:mm").toDate();
  // can no longer show the people coming count
  /*   const event = this.props.event;
  const data = [
    { name: "people coming", value: event.yes_rsvp_count },
    { name: "open slots", value: event.rsvp_limit - event.yes_rsvp_count },
  ]; */
  //const colors = ["#8884d8", "#37c0ba"];
  return (
    <div className="event">
      <div className="event__Overview">
        <h2 className="event__Overview--name">{summary}</h2>
        <p className="event__Overview--localDate">{`${eventStart}`}</p>
        {location && (
          <p className="event__Overview--venue">
            @{summary} | {location}
          </p>
        )}
        {/*         {event.rsvp_limit && (
          <ResponsiveContainer height={150} width={250}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={32}
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Pie>
              <Legend
                iconSize={10}
                iconType="triangle"
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        )} */}
        {/*         {!event.rsvp_limit && <p>{event.yes_rsvp_count} People coming</p>} */}
        {showDetails && (
          <button
            className="details-btn"
            onClick={() => setShowDetails(!showDetails)}
          >
            hide details
          </button>
        )}
        {!showDetails && (
          <button
            className="details-btn"
            onClick={() => setShowDetails(!showDetails)}
          >
            show details
          </button>
        )}
      </div>
      {showDetails && (
        <div className="event__Details">
          <h3>About event:</h3>
          <h4>
            <a href={htmlLink} target="_blank" rel="noopener noreferrer">
              See details on Google Calendar
            </a>
          </h4>
          <p
            className="event__Details--description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      )}
    </div>
  );
};

export default Event;
