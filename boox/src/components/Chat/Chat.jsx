import React, { Component } from 'react';
import styles from "./Chat.module.css";

class OpenChat extends Component {
	render() {
		return (
			<>
				<div className={ styles.popup_inner }>
					<button className={ styles.openChat } onClick={this.props.closeChat}>Chat</button>
					<button className={ styles.closeChat } onClick={this.props.closeChat}>-</button>
					<p className={ styles.chatSend }>Hola</p>
					<p className={ styles.chatRec }>Que tal?</p>
					<input className={ styles.chatInput }/>
					<button className={ styles.sendMes }>&gt;</button>
				</div>
			</>
		);
	}
}

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      showChat: false,
    };
  }
  toggleChat() {
    this.setState({
      showChat: !this.state.showChat
    });
  }
  render() {
    return (
      <>
				<button className={ styles.chat } onClick={this.toggleChat.bind(this)}>Chat</button>
				<button className={ styles.open } onClick={this.toggleChat.bind(this)}>+</button>
				{this.state.showChat
				?	<OpenChat closeChat={this.toggleChat.bind(this)}/>
				:	null
				}
      </>
    );
  }
}

export default Chat;
