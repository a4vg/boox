import React, { Component } from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img src={Logo} />
            <h1>BooX</h1>
          </Link>
        </div>
        <div className={styles.buySellContainer}>
          <button className={styles.buy}>Comprar</button>
          <button className={styles.sell}>Vender</button>
        </div>
        {!this.props.account && (
          <div className={styles.accountContainer}>
            <Link to="login">
              <button className={styles.signin}>Ingresar</button>
            </Link>
            <Link to="register">
              <button className={styles.register}>Regístrate</button>
            </Link>
          </div>
        )}
      </header>
    );
  }
}

export default Header;
