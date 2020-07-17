import React, { Component } from 'react';
import PurchaseStage from './PurchaseStage/PurchaseStage';
import { ReactComponent as InfoIcon } from '../../assets/icons/info.svg';
import ProfileIcon from '../../assets/icons/profile-icon.svg';
import BookPic from '../../assets/books/clash-kings/front.JPG';
import SellerDetails from '../SellerDetails/SellerDetails';
import Chat from '../Chat/Chat';
import {Link} from 'react-router-dom';
import styles from './Buy.module.css';

class Buy extends Component {
  state = {
    book: {
      title: "Game of Thrones: A Game of Thrones",
      price: "150.99",
      author: "George R. R. Martin",
      edition: "2",
      genres: ["Fantasía", "Aventuras", "Misterio"],
      condition: "Nuevo",
      isbn: "0-3899-5104-8",
      sellerId: "menganito",
      seller: {
        accountKey: "menganito",
        fullname: "Menganito El Vendedor",
        score: "4",
        location: "San Isidro, Lima (a 2km)"
      }
    },
  }

  render() {
    let { book } = this.state;
    return (
      <div className={ styles.buy }>
        <div className={ styles.title }>
          <img src={ProfileIcon}/>
          <h1>Vendedor: <span style={{fontWeight: 400}}>{ book.seller.fullname }</span></h1>
          <Link to={`/${book.sellerId}/dashboard`}><InfoIcon className={styles.infoicon} width="30px" height="30px"/></Link>
          <PurchaseStage/>
        </div>
        <div className={styles.BookStageContainer}>
          <div className={styles.bookDetails}>
            <Chat/>
            <h5>Estas intentando comprar el libro...</h5>
            <img src={BookPic}/>
            <div className={styles.text}>
              <h4>{book.title}</h4>
              <h5>Vendido por...</h5>
              <SellerDetails seller={book.seller}/>
            </div>

          </div>
          <div className={styles.contentStage}>
          
          </div>
        </div>
        
      </div>
    );
  }
}

export default Buy;