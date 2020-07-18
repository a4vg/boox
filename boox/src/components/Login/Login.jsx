import React, { Component } from 'react';
import Logo from "../../assets/logo.svg";
import styles from "./Login.module.css";


class Login extends Component {
	state={email:''}
	handleIngresar = () => {    
		this.props.onEmailChange(this.state.email);
		this.props.closePopup();
	}
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
		<label className={ styles.Login }>Correo electrónico</label>
		<input className={ styles.Login } type="text"
			onChange={(e)=>this.setState({email:e.target.value})}	placeholder="example@boox.com"/>

		<label className={ styles.Login }>Contraseña</label>
		<input className={ styles.Login } type="password"/>

		<p/>
		<button className={ styles.ingresar } onClick={this.handleIngresar}>Ingresar</button>
	  </form>
	  <div>
		<p className={ styles.Login }>¿No tienes una cuenta?
		  <button className={ styles.linkContainer } onClick={this.props.change}>
		  Crea una
		  </button>
		</p>
	  </div>
	</div>
	</div>
      </>
    );
  }
}

export default Login;
