import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import Register from "./Register/Register";
import SearchResults from "./SearchResults/SearchResults";
import BookDetails from "./BookDetails/BookDetails";
import SearchBar from "./SearchBar/SearchBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Get books photos */
const reqGot = [
  require.context("../assets/books/game-thrones", false),
  require.context("../assets/books/clash-kings", false),
  require.context("../assets/books/storm-swords", false),
  require.context("../assets/books/feast-crows", false),
  require.context("../assets/books/dance-dragons", false),
];

let reqToObject = (req) => {
  return req.keys().reduce((obj, path) => {
    let name = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf("."));
    obj[name] = req(path);
    return obj;
  }, {});
};

class App extends Component {
  state = {
    accounts: {
      fulanito: {
        username: "fulanito",
        email: "fulanito@gmail.com",
        password: "megustacomprar",
        firstname: "Fulanito",
        lastname: "El Comprador",
        phone: "+51 99234633",
      },
      menganito: {
        username: "menganito",
        email: "menganito@gmail.com",
        password: "megustavender",
        firstname: "Menganito",
        lastname: "El Vendedor",
        phone: "+51 93399568",
      },
    },
    sellers: [
      {
        accountKey: "menganito",
        score: "4",
        location: "San Isidro, Lima (a 2km)",
      },
    ],
    books: [
      {
        title: "Game of Thrones: A Game of Thrones",
        price: "150.99",
        author: "George R. R. Martin",
        edition: "2",
        genres: ["Fantasía", "Aventuras", "Misterio"],
        condition: "Nuevo",
        isbn: "0-3899-5104-8",
        sellerId: "menganito",
        photos: reqToObject(reqGot[0]), // front, back, spine, inside
      },
      {
        title: "Game of Thrones: A Clash of Kings",
        price: "124.90",
        author: "George R. R. Martin",
        edition: "1",
        genres: ["Fantasía", "Aventuras", "Misterio"],
        condition: "Buen estado",
        isbn: "0-7776-1226-7",
        sellerId: "menganito",
        photos: reqToObject(reqGot[1]),
      },
      {
        title: "Game of Thrones: A Storm of Swords",
        price: "103.50",
        author: "George R. R. Martin",
        edition: "1",
        genres: ["Fantasía", "Aventuras", "Misterio"],
        condition: "Nuevo",
        isbn: "0-4503-6522-0",
        sellerId: "menganito",
        photos: reqToObject(reqGot[2]),
      },
      {
        title: "Game of Thrones: A Feast for Crows",
        price: "159.60",
        author: "George R. R. Martin",
        edition: "5",
        genres: ["Fantasía", "Aventuras", "Misterio"],
        condition: "Mal estado",
        isbn: "0-6775-0009-2",
        sellerId: "menganito",
        photos: reqToObject(reqGot[3]),
      },
      {
        title: "Game of Thrones: A Dance with Dragons",
        price: "112.00",
        author: "George R. R. Martin",
        edition: "2",
        genres: ["Fantasía", "Aventuras", "Misterio"],
        condition: "Buen estado",
        isbn: "0-8297-8026-2",
        sellerId: "menganito",
        photos: reqToObject(reqGot[4]),
      },
    ],
    currentAccountKey: "menganito",
  };

  componentDidMount() {
    /* Add fullname in sellers */
    let sellersWithFullname = this.state.sellers.map((s) => {
      let { firstname, lastname } = this.state.accounts[s.accountKey];
      s['fullname'] = `${firstname} ${lastname}`;
      return s;
    });
    this.setState({ sellers: sellersWithFullname });

    /* Add seller in books */
    let booksWithSeller = this.state.books.map((b) => {
      b.seller = this.state.sellers.find((s) => {
        return s.accountKey === b.sellerId;
      });
      
      return b;
    });

    this.setState({ books: booksWithSeller });
  }

  componentsWithSearchBar = () => (
    <React.Fragment>
      <SearchBar />
      <Switch>
        <Route path="/book/:id" component={(p) => <BookDetails {...p} books={this.state.books}/>} />
        <Route path="/search" component={(p) => <SearchResults {...p} books={this.state.books}/>} />
      </Switch>
    </React.Fragment>
  );
  render() {
    return (
      <div className="App">
        <Router>
          <Header account={this.state.accounts[this.state.currentAccountKey]} />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/:username/dashboard" component={ () => <Dashboard account={ this.state.accounts[this.state.currentAccountKey] }/> } />
            <Route component= { this.componentsWithSearchBar } />
            <Route component= { this.componentsWithSearchBar }/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
