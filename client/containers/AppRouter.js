import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { getStarted } from '../actions';

import { Router } from 'react-router-dom'
import { history } from '../helper/history'
import Header from '../components/common/Header'
import Main from '../components/Main/Main'
import Footer from '../components/common/Footer'

class AppRouter extends Component {
	constructor(props) {
		super(props);
	}
	// componentWillMount() {
	// 	this.props.dispatch(getStarted());
	// }
	render() {
		return (
			<Router history={history}>
				<div>
					<Header />
					<Main />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default connect(state => state)(AppRouter);