import React, { Component } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import styles from './SearchBar.module.css';

class SearchBar extends Component {
  render() {
    return (
      <div className={ styles.searchbar }>
        <SearchBox width="50%" height="2.5rem"/>
      </div>
    );
  }
}

export default SearchBar;