import React, {  Component } from "react";
import moment from "moment";

class Event extends Component {
  state = {
    showDetails: false,
  };

  render() {
    const {
      summary,
      location,
      start,
      htmlLink,
      description,
    } = this.props.event;
    const eventStart = moment(start.dateTime, "YYYY-MM-DD HH:mm").toDate();
    const { showDetails } = this.state;
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
          {showDetails && (
            <button
              className="details-btn"
              onClick={() => this.setState({ showDetails: !showDetails })}
            >
              hide details
            </button>
          )}
          
          {!showDetails && (
            <button
              className="details-btn"
              onClick={() => this.setState({ showDetails: !showDetails })}
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
  }
}

export default Event;
