import React, { Component } from 'react';
import './SearchHeader.css';
const searchIcon = 'search_documents_icon.jpg';

class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {typed: ''};
  }
  getInitialState() {
    return {typed: ''};
  }
  render() {
    return (
      <div className="SearchHeader">
        <input
          type="text"
          placeholder="just bloody type something"
          onChange={this.onChange.bind(this)} />
        <img className="SearchHeader-logo"
          alt="search header logo"
          src={searchIcon} />
        <p id="typed">{this.state.typed}</p>
      </div>
    );
  }
  onChange(event) {
    this.setState({typed: event.target.value});
  }
}

export default SearchHeader;
