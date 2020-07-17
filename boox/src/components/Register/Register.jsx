import React, { Component } from 'react';
import Logo from "../../assets/logo.svg";
import styles from "./Register.module.css";

class Register extends Component {
  render() {
    return (
      <>
	<div className={ styles.popup }>
	  <button className={ styles.close } onClick={this.props.closePopup}>X</button>
	<div className={ styles.popup_inner }>
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
		  <button className={ styles.linkContainer } onClick={this.props.change}>
		  Inicia sesión
		  </button>
		</p>
	  </div>
	</div>
	</div>
      </>
    );
  }
}

export default Register;
