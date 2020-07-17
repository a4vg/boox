import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Profile';
import AddVenta from './AddVenta';


class Dashboard extends Component {

    state = {
        comp: 'comprador',
        text: 'Amo los libros, pero mas el dinero',
        edit: false,
    }

    render() {

        return (
            <Switch>
                <Route path="/" component={() => <Profile account={this.props.account} />} />
                <Route path="/add-venta" component={AddVenta} />
            </Switch>
        );
    }
}

export default Dashboard;