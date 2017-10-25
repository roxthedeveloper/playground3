import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStarted } from '../actions';
import App from '../components/App'

import { BrowserRouter } from 'react-router-dom'

class SmartComponent extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.props.dispatch(getStarted());
	}
	render() {
		return (
			<BrowserRouter>
				<App />
			</BrowserRouter>
		);
	}
}

export default connect(state => state)(SmartComponent);