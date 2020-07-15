import React, { Component } from 'react';

class BookDetails extends Component {
  render() {
    return (
      <div>This is the page with details of book with id { this.props.match.params.id }</div>
    );
  }
}

export default BookDetails;