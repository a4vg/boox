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
		<label>Nombre y Apellidos</label>
		<input type="text" placeholder="Juan Pérez"/>

		<label>Correo electrónico</label>
		<input type="text" placeholder="example@boox.com"/>

		<label>Número telefónico</label>
		<input type="text" placeholder="+(51)985 486 665"/>

		<label>Contraseña</label>
		<input type="password"/>

		<label>Confirme Contraseña</label>
		<input type="password"/>

		<p/>
		<button className={ styles.crear }>Crear</button>
	  </form>
	  <div>
		<p>¿Ya tienes una cuenta?
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
