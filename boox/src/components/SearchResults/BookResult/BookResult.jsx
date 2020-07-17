import React, { Component } from 'react';
import SellerDetails from '../../SellerDetails/SellerDetails';
import styles from './BookResult.module.css';

class BookResult extends Component {
  render() {
    return (
      <div className={ styles.bookResult }>
        <img alt={this.props.book.isbn} src={this.props.book.photos.front} />
        <div className={ styles.listingDetails }>
          <div className={ styles.bookDetails }>
            <h4>{ this.props.book.title }</h4>
            <h2>S/.{ this.props.book.price }</h2>
            <p><span style={{fontWeight: 700}}>Autor:</span> {this.props.book.author}</p>
            <p><span style={{fontWeight: 700}}>Edición:</span> {this.props.book.edition}</p>
            <p><span style={{fontWeight: 700}}>Género:</span> {this.props.book.genres.join(' / ')}</p>
            <p><span style={{fontWeight: 700}}>Estado:</span> {this.props.book.condition}</p>
            <p><span style={{fontWeight: 700}}>ISBN:</span> {this.props.book.isbn}</p>
          </div>
          <SellerDetails className={styles.sellerDetails} seller={ this.props.book.seller }/>
        </div>
        <div className={styles.overlay}>
        </div>
      </div>
    );
  }
}

export default BookResult;