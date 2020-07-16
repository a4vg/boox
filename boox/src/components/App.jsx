import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Landing from './Landing';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import Register from './Register/Register';
import SearchResults from './SearchResults';
import BookDetails from './BookDetails';
import SearchBar from './SearchBar/SearchBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    accounts: {
      fulanito: {
        username: 'fulanito',
        email: 'fulanito@gmail.com',
        password: 'megustacomprar',
        firstname: 'Fulanito',
        lastname: 'El Comprador',
        phone: '+51 99234633'
      },
      menganito: {
        username: 'menganito',
        email: 'menganito@gmail.com',
        password: 'megustavender',
        firstname: 'Menganito',
        lastname: 'El Vendedor',
        phone: '+51 93399568'
      }
    },
    currentAccountKey: "fulanito",
  }
  
  componentsWithSearchBar = () => (
    <React.Fragment>
      <SearchBar/>
      <Switch>
        <Route path='/book/:id' component={ BookDetails }/>
        <Route path='/search' component={ SearchResults }/>
      </Switch>
    </React.Fragment>
  )
  render(){
    return (
      <div className="App">
        <Router>
          <Header account={ this.state.accounts[this.state.currentAccountKey] }/>
          <Switch>
            <Route exact path='/' component={ Landing }/>
            <Route exact path='/login' component={ Login }/>
            <Route exact path='/register' component={ Register }/>
            <Route path='/:username/dashboard' component={ () => <Dashboard account={ this.state.accounts[this.state.currentAccountKey] } /> } />
            <Route component={ this.componentsWithSearchBar }/>
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
