import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Landing from './Landing';
import Login from './Login/Login';
import Register from './Register/Register';
import Dashboard from './Dashboard';
import SearchResults from './SearchResults';
import BookDetails from './BookDetails';
import SearchBar from './SearchBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
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
          <Header/>
          <Switch>
            <Route exact path='/' component={ Landing }/>
            <Route exact path='/login' component={ Login }/>
            <Route exact path='/register' component={ Register }/>
            <Route path=':username/dashboard' component={ Dashboard }/>
            <Route component={ this.componentsWithSearchBar }/>
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
