import React, { Component } from "react";
import SearchFilters from "./SearchFilters/SearchFilters";
import BookResult from "./BookResult/BookResult";
import { Link } from "react-router-dom";
import styles from "./SearchResults.module.css";


class SearchResults extends Component {
  getQuery = () => {
    let params = new URLSearchParams(this.props.location.search);
    return params.get("q");
  };

  getMatchingBooks = () => {
    return this.getQuery()?
      this.props.books
      .filter((b) => b.title.toLowerCase().includes(this.getQuery().toLowerCase()))
      : [];
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
              <Link to={`/book/${b.isbn}`} className={ styles.bookResultLink }>
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
