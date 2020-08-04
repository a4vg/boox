import React, { Component } from "react";
import Profile from './Profile';

class Dashboard extends Component {

    state = {
        comp: 'comprador',
        text: 'Amo los libros, pero mas el dinero',
        edit: false,
    }

    render() {
      let showPrivateInfo = this.props.location.fromBookDetails? false : true;
        return (
            <Profile showPrivateInfo={showPrivateInfo} account={this.props.account}/>
        );
    }
}

export default Dashboard;