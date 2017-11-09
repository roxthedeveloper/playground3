import React from 'react'
import { Button, Col, ButtonToolbar, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import FieldGroup from '../common/FieldGroup'
import { userActions } from '../../actions/actions.user'

class RegisterPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            username: '',
            password: '',
            submitted: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        //console.log('change', e);
        const { name, value } = e.target;
        this.setState({ 
            [name]:value
        });
    }

    handleSubmit(e){
        //console.log('submit', e);
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, username, password } = this.state;
        const { dispatch } = this.props;
        console.log(email, password, username);
        if( email && password && username) {
            console.log('dispatch');
            dispatch(userActions.register(email, username, password));
        }
    }

    render(){
        var linkStyle = {
            textDecoration: "none"
        }
        const { registering, error } = this.props;
        const { email, username, password, submitted } = this.state;

        console.log('RegisterPage state', this.state)
        console.log('RegisterPage props', this.props)

        return (
            <div className="container">
                <h2>Register</h2>
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
                        help={submitted && !email && 'Email is required'}
                    />
                    <FieldGroup
                        id="formControlsUsername"
                        type="text"
                        name="username"
                        label="User name"
                        placeholder="Enter username"
                        onChange={this.handleChange}
                        help={submitted && !username && 'Username is required'}
                    />
                    <FieldGroup
                        id="formControlsPassword"
                        type="password"
                        name="password"
                        label="Password"
                        placeholder="Enter password"
                        onChange={this.handleChange}
                        help={submitted && !password && 'Password is required'}
                    />
                    <ButtonToolbar>
                        <Button bsStyle="primary" type="submit">Register</Button>
                        <Button><Link to="/login" style={linkStyle}>Login</Link></Button>
                    </ButtonToolbar>
                </form>
            </div>
        );
    }
}

// //export default LoginPage
function mapStateToProps(state) {
    return ({
        error: state.registration.error,
        registering: state.registration.registering
    });
}
export default connect(mapStateToProps)(RegisterPage);