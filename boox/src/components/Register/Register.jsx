import React, { Component } from 'react';
import Logo from "../../assets/logo.svg";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
	  <>
	  <div className={ styles.logoContainer }>
	  	<img src={ Logo } />
	  </div>
      <form>
		<label className={ styles.Register }>Nombre y Apellidos</label>
		<input className={ styles.Register } type="text" placeholder="Juan Pérez"/>

		<label className={ styles.Register }>Correo electrónico</label>
		<input className={ styles.Register } type="text" placeholder="example@boox.com"/>

		<label className={ styles.Register }>Número telefónico</label>
		<input className={ styles.Register } type="text" placeholder="+(51)985 486 665"/>

		<label className={ styles.Register }>Contraseña</label>
		<input className={ styles.Register } type="password"/>

		<label className={ styles.Register }>Confirme Contraseña</label>
		<input className={ styles.Register } type="password"/>

		<p/>
		<button className={ styles.crear }>Crear</button>
	  </form>
	  <div>
		<p className={ styles.Register }>¿Ya tienes una cuenta?
		  <Link to="/login" className={ styles.linkContainer }>
		  Inicia sesión
		  </Link>
		</p>
	  </div>
	  </>
    );
  }
}

export default Register;
