import React, { Component } from 'react';
import styles from './Landing.module.css'
import SearchBox from "../SearchBox/SearchBox";
import BookSlider from "../BookSlider/BookSlider";

class Landing extends Component {

  render() {
      return (
      <div>
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>ENCUENTRA TU LIBRO IDEAL AQUÍ</h1>
                <SearchBox height="50px" />
            </div>
        </div>

        <div className={styles.slider}>
            <BookSlider title={"Libros más buscados"} width="50%" />
        </div>

        <div className={styles.slider} >
            <BookSlider title={"Libros sugeridos"} />
        </div>
      </div>
    );
  }
}

export default Landing;
