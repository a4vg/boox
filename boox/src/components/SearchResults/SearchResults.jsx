import React, { Component } from 'react';
import SearchFilters from './SearchFilters/SearchFilters';
import styles from './SearchResults.module.css';

class SearchResults extends Component {
  getQuery = () => {
    let params = new URLSearchParams(this.props.location.search);
    return params.get('q');
  }

  render() {
    return (
      <div className={ styles.searchResultsContainer }>
        <div className={ styles.searchTitle }>
          <h2>Resultados de búsqueda: "{ this.getQuery() }" </h2>
        </div>
        <SearchFilters/>
      </div>
    );
  }
}

export default SearchResults;