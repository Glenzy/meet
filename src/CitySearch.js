import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
  state = {
    locations: this.props.locations,
    query: '',
    suggestions: [],
    showSuggestions:false
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({showSuggestions:true});
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    console.log(this.state.query)
    if (suggestions.length === 0) {
      return this.setState({
        query: value,
        infoText: 'We can not find the city you are looking for. Please try another city',
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText:''
      });
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions:false,
      infoText:''
    });
    this.props.updateEvents(suggestion);
  };

  render() {
    console.log(this.state.query)
    return (
      <div className='CitySearch'>
      <InfoAlert text={this.state.infoText} />
        <input
          type='text'
          className='city'
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
        <ul
          className={
            this.state.showSuggestions ? 'suggestions showSuggestions' : 'display-none'
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
          <li onClick={() => this.handleItemClicked('all')}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;
