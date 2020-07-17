import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import ProfileIcon from "../../assets/icons/profile-icon.svg";
import DotsIcon from "../../assets/icons/dots-icon.svg";
import styles from "./Header.module.css";
import Register from "./../Register/Register";
import Login from "./../Login/Login";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showRegister: false,
      showLogin: false
    };
  }
  toggleRegister() {
    this.setState({
      showRegister: !this.state.showRegister
    });
  }
  toggleLogin() {
    this.setState({
      showLogin: !this.state.showLogin
    });
  }
  change() {
    this.setState({
    	showRegister: !this.state.showRegister,
      showLogin: !this.state.showLogin
    });
  }
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
              <button className={styles.signin} onClick={this.toggleLogin.bind(this)}>
              	Ingresar
              </button>
              <button className={styles.register} onClick={this.toggleRegister.bind(this)}>
		  					Regístrate
              </button>
              {this.state.showRegister
              	? <Register
              			closePopup={this.toggleRegister.bind(this)}
              			change={this.change.bind(this)}
              		/>
            		: null
            	}
            	{this.state.showLogin
              	? <Login
              			closePopup={this.toggleLogin.bind(this)}
              			change={this.change.bind(this)}
              		/>
            		: null
            	}
            </div>
            
        }
      </header>
    );
  }
}

export default Header;
