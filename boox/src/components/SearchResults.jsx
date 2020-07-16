import React, { Component } from 'react';

class SearchResults extends Component {
  getQuery = () => {
    let params = new URLSearchParams(this.props.location.search);
    return params.get('q');
  }

  render() {
    return (
      <div>
      { this.getQuery()
        ? `This is the search results page for ${ this.getQuery() }`
        : 'You just searched nothing. Remember to use /search?q=yoursearch'
      }
      </div>
    );
  }
}

export default SearchResults;