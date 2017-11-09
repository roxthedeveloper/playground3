import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Button, Col, ButtonToolbar, Alert } from 'react-bootstrap'

import FieldGroup from '../common/FieldGroup'
import { userActions } from '../../actions/actions.user'

class LoginPage extends React.Component {
    constructor(props){
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            email: '',
            password: '',
            submitted: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e){
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;
        if( email && password ) {
            dispatch(userActions.login(email, password));
        }
    }

    render(){
        var linkStyle = {
            textDecoration: "none"
        }
        const { loggingIn, error, user } = this.props;
        const { email, password, submitted } = this.state;

        console.log('LoginPage state', this.state)
        console.log('LoginPage props', this.props)

        return (
            <div className="container">
                <h2>Log In</h2>
                {error && <Alert bsStyle="danger">
                    <strong>Error</strong> {error.message}
                </Alert>}
                <form onSubmit={this.handleSubmit}>
                    <FieldGroup
                        id="formControlsEmail"
                        type="email"
                        name="email"
                        label="Email address"
                        placeholder="Enter email"
                        onChange={this.handleChange}
                    />
                    <FieldGroup
                        id="formControlsPassword"
                        type="password"
                        name="password"
                        label="Password"
                        placeholder="Enter password"
                        onChange={this.handleChange}
                    />
                    <ButtonToolbar>
                        <Button bsStyle="primary" type="submit">Login</Button>
                        <Button><Link to="/register" style={linkStyle}>Register</Link></Button>
                    </ButtonToolbar>
                </form>
            </div>
        );
    }
}

// //export default LoginPage
function mapStateToProps(state) {
    return ({
        error: state.authentication.error,
        loggingIn: state.authentication.loggingIn,
        user: state.authentication.user
    });
}
export default connect(mapStateToProps)(LoginPage);