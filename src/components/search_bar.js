//User types input, request from youtube api
import React, { Component } from 'react';
//converted searchbar to class to add functionality rather than just one function
class SearchBar extends Component {

  constructor(props) {
    super(props);
//in constructor we r saying this.state equals an object
    this.state = {term: '' };
  }
//rendering input to the screen ..updating state
  render() {
    return (
    <div>
      <input
        value={this.state.term} //correct value of input at any given time
        onChange={(event) => this.setState({ term: event.target.value })} />
    </div>
    );
  }
}
//input element with event handler
//to access change input use onChange={eventhandler}
//passing referecnce to eventhandler to onChange
export default SearchBar;
