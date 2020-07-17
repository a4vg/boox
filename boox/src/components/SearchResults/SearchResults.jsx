import React, { Component } from "react";
import SearchFilters from "./SearchFilters/SearchFilters";
import BookResult from "./BookResult/BookResult";
import { Link } from "react-router-dom";
import styles from "./SearchResults.module.css";
const reqGot = [
  require.context("../../assets/books/game-thrones", false),
  require.context("../../assets/books/clash-kings", false),
  require.context("../../assets/books/storm-swords", false),
  require.context("../../assets/books/feast-crows", false),
  require.context("../../assets/books/dance-dragons", false),
];

let reqToObject = (req) => {
  return req.keys().reduce((obj, path) => {
    let name = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf("."));
    obj[name] = req(path);
    return obj;
  }, {});
};

class SearchResults extends Component {
  state = {
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
  };

  getQuery = () => {
    let params = new URLSearchParams(this.props.location.search);
    return params.get("q");
  };

  getMatchingBooks = () => {
    return this.getQuery()?
      this.state.books
      .filter((b) => b.title.toLowerCase().includes(this.getQuery().toLowerCase()))
      : [];
  }

  componentDidMount() {
    let booksWithSeller = this.state.books.map((b) => {
      b.seller = this.props.sellers.find((s) => {
        return s.accountKey === b.sellerId;
      });
      return b;
    });

    this.setState({ books: booksWithSeller });
  }

  render() {
    return (
      <div className={styles.searchResultsContainer}>
        <div className={styles.searchTitle}>
          <h2>Resultados de búsqueda: "{this.getQuery()}" </h2>
        </div>
        <div className={styles.filterResultsContainer}>
          <SearchFilters />
          <div className={styles.resultsContainer}>{
            this.getMatchingBooks()
            .map( (b) =>
              <Link to={`/book/${b.isbn}`} className={ styles.bookResultLink}>
                <BookResult key={b.isbn} book={b} />
              </Link>
            )
          }</div>
        </div>
      </div>
    );
  }
}

export default SearchResults;
