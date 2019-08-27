import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {

	render() {
		return (
			<div>
				Página Home...

				<p>E-MAIL: {this.props.email}</p>
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

export default connect(mapStateToProps)(Home);