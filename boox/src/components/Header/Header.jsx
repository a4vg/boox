import React, { Component } from 'react';
import styles from './Header.module.css';
import Logo from '../../assets/logo.svg';

class Header extends Component {
  render() {
    return (
      <header className={ styles.header } >
        <div className={ styles.logoContainer }>
          <img src={ Logo } />
          <h1>BooX</h1>
        </div>
        <div className={ styles.buySellContainer }>
          <button className={ styles.buy }>Comprar</button>
          <button className={ styles.sell }>Vender</button>
        </div>
        { !this.props.account &&
          <div className={ styles.accountContainer }>
              <button className={ styles.signin }>Ingresar</button>
              <button className={ styles.register }>Registrate</button>
          </div>
        }
        
      </header>
    )
  }
} 

export default Header;