import React, { Component } from "react";
import Profile from './Profile';

class Dashboard extends Component {

    state = {
        comp: 'comprador',
        text: 'Amo los libros, pero mas el dinero',
        edit: false,
    }

    render() {

        return (
            <Profile/>
        );
    }
}

export default Dashboard;