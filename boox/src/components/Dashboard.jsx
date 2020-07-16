import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div>This is the dashboard of { this.props.match.params.username }</div>
    );
  }
}

export default Dashboard;