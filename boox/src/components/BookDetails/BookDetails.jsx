import React, { Component } from "react";
import styles from "./BookDetails.module.css";
import { Link } from "react-router-dom";
import SellerDetails from "../SellerDetails/SellerDetails";

class BookDetails extends Component {
  state = {
    mainImg: ""
  }

  previousBookURL = () => {
    let {matchingBooks} = this.props.location;
    if (!matchingBooks) return;

    let curIndex = matchingBooks.findIndex((b) => 
      b.isbn === this.props.match.params.id
    )
    if (!curIndex) return;

    return {
      pathname: `/book/${matchingBooks[curIndex-1].isbn}`,
      matchingBooks: matchingBooks
    }
     
  }

  nextBookURL = () => {
    let {matchingBooks} = this.props.location;
    if (!matchingBooks) return;

    let curIndex = matchingBooks.findIndex((b) => 
      b.isbn === this.props.match.params.id
    )

    if (curIndex==matchingBooks.length-1) return;

    return {
      pathname: `/book/${matchingBooks[curIndex+1].isbn}`,
      matchingBooks: matchingBooks
    }
  }

  contactLink = (book) => {
    return {
      pathname: `/buy/${book.isbn}/${book.sellerId}`,
      book: book
    }
  }

  render() {
    let book = this.props.books.find(
      (b) => b.isbn === this.props.match.params.id
    );

    return book ? (
      <React.Fragment>
        <button onClick={this.props.history.goBack} className={styles.return}>
          Volver a búsqueda
        </button>
        <h2 className={styles.BookDetails}>{book.title} por Autor </h2>
        <div className={styles.row}>
          {
            this.previousBookURL() &&
            <Link to={this.previousBookURL()} replace>
              <div className={styles.columnEdge}>&lt;</div>
            </Link>
          }
          <div className={styles.column}>
            <div className={styles.mainImgContainer}>
              <img src={this.state.mainImg? this.state.mainImg : book.photos.front} />
            </div>
            <div className={styles.row}>
              {
                Object.values(book.photos).map((p, idx) => {
                  return (
                    <div key={idx} className={ styles.imgColumn }>
                      <div onClick={() => this.setState({mainImg: p})} className={ styles.otherImgContainer }>
                        <img src={ p } />
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className={styles.column}>
            <h1 className={styles.BookDetails}>S/.{book.price}</h1>
            <h3 className={styles.BookDetails}>Detalles del libro</h3>
            <p className={styles.BookDetails}>
              Estado: <span className={styles.light}>{book.condition}</span>
            </p>
            <p className={styles.BookDetails}>
              Géneros: <span className={styles.light}>{book.genres.join(" / ")}</span>
            </p>
            <p className={styles.BookDetails}>
              ISBN: <span className={styles.light}>{book.isbn}</span>
            </p>
            <div className={styles.row}>
              <div className={styles.subcolumn}>
                <Link to={`/${ book.sellerId }/dashboard`} className={styles.BookDetails}>
                  <h3 className={styles.BookDetails}>Vendedor</h3>
                </Link>
                <SellerDetails seller={book.seller} className={styles.BookDetails}/>
              </div>
              <div className={styles.subolumn}>
                <Link to={this.contactLink(book)} className={styles.BookDetails}>
                  <button className={styles.contact}>Contactar</button>
                </Link>
              </div>
            </div>
          </div>
          {
            this.nextBookURL() &&
            <Link to={this.nextBookURL()} replace><div className={styles.columnEdge}>&gt;</div></Link>
          }
        </div>
      </React.Fragment>
    ) : (
      <div>No se ha encontrado un libro con este id</div>
    );
  }
}

export default BookDetails;
