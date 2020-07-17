import React, { Component } from 'react';
import Logo from "../../assets/logo.svg";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
	  <>
	  <div className={ styles.logoContainer }>
	  	<img src={ Logo } />
	  </div>
      <form>
		<label className={ styles.Login }>Correo electrónico</label>
		<input className={ styles.Login } type="text" placeholder="example@boox.com"/>

		<label className={ styles.Login }>Contraseña</label>
		<input className={ styles.Login } type="password"/>

		<p/>
		<button className={ styles.ingresar }>Ingresar</button>
	  </form>
	  <div>
		<p className={ styles.Login }>¿No tienes una cuenta?
		  <Link to="/register" className={ styles.linkContainer }>
		  Crea una
		  </Link>
		</p>
	  </div>
	  </>
    );
  }
}

export default Login;
