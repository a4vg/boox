import React, { Component } from 'react';

class SearchResults extends Component {
  state = {}

  componentDidMount() {
    let params = new URLSearchParams(this.props.location.search);
    this.setState({q: params.get('q')});
  }

  render() {
    return (
      <div>
      { this.state.q
        ? `This is the search results page for ${ this.state.q }`
        : 'You just searched nothing. Remember to use /search?q=yoursearch'
      }
      </div>
    );
  }
}

export default SearchResults;