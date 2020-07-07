import React, { Component } from "react";
import { InfoAlert } from "./Alert";

class CitySearch extends Component {
  state = {
    locations: this.props.locations,
    query: "",
    suggestions: [],
    infoText: "",
    warningText: "",
    showSuggestions: false,
  };
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });

    return this.setState({
      query: value,
      suggestions,
    });
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
    });
    this.props.updateEvents(suggestion);
  };

  render() {
    const { showSuggestions } = this.state;
    return (
      <div className="CitySearch">
        <InfoAlert text={this.state.infoText} />
        <label>
          <h4>City Search</h4>
          <input
            type="text"
            className="city"
            value={this.state.query}
            onChange={this.handleInputChanged}
            placeholder="Search for a city"
          />
        </label>

        <ul
          className={
            showSuggestions ? "suggestions showSuggestions" : "display-none"
          }
        >
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >
              {suggestion}
            </li>
          ))}
          <li onClick={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;
