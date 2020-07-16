import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import ProfileIcon from "../../assets/icons/profile-icon.svg";
import DotsIcon from "../../assets/icons/dots-icon.svg";
import styles from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img alt="logo" src={Logo} />
            <h1>BooX</h1>
          </Link>
        </div>
        <div className={styles.buySellContainer}>
          <button className={styles.buy}>Comprar</button>
          <button className={styles.sell}>Vender</button>
        </div>   
        {this.props.account
          ? <div className={styles.accountContainer}>
              <Link to={`/${this.props.account.username}/dashboard/`}>
                <img alt="profile-icon" src={ProfileIcon}/>
                <h5>{this.props.account.firstname}</h5>
                <img alt="dots-icon" src={DotsIcon}/>
                </Link>
            </div>
          : <div className={styles.signinRegisterContainer}>
              <Link to="login">
                <button className={styles.signin}>Ingresar</button>
              </Link>
              <Link to="register">
                <button className={styles.register}>Regístrate</button>
              </Link>
            </div>
        }
      </header>
    );
  }
}

export default Header;
