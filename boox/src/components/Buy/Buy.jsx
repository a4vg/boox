import React, { Component } from 'react';
import PurchaseStage from './PurchaseStage/PurchaseStage';
import { ReactComponent as InfoIcon } from '../../assets/icons/info.svg';
import ProfileIcon from '../../assets/icons/profile-icon.svg';
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
          <Link to={`/${book.sellerId}/dashboard`}><InfoIcon width="30px" height="30px"/></Link>
        </div>
        <PurchaseStage/>
      </div>
    );
  }
}

export default Buy;