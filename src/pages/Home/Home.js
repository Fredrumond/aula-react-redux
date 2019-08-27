import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeEmail } from '../../actions/UserActions';

class Home extends Component {

	constructor(props){
		super(props);
		this.state = {};		

		this.trocarEmail = this.trocarEmail.bind(this);
	}

	trocarEmail(){
		let email = document.getElementById("email").value;

		//EXECUTAR ACTION
		this.props.changeEmail(email);
	}

	render() {
		return (
			<div>
				Página Home...

				<p>E-MAIL: {this.props.email}</p>
				<br />
				<input type="email" id="email" />
				<button onClick={this.trocarEmail}>Trocar E-mail</button>
				<br />
				<Link to="/sobre">Ir para página sobre</Link>
			</div>
		);
	}

}

const mapStateToProps = (state) => ({
	email:state.user.email,
	pass:state.user.pass
});

const mapActionsToProps = {
	changeEmail
}

export default connect(mapStateToProps,mapActionsToProps)(Home);