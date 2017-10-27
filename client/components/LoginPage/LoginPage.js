import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Button, Col, ButtonToolbar, Alert } from 'react-bootstrap'

import FieldGroup from '../common/FieldGroup'
import { userActions } from '../../actions/actions'

class LoginPage extends React.Component {
    constructor(props){
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            email: '',
            password: '',
            submitted: false,
            loggingIn: false,
            error: null
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
            console.log('ready to dispatch!');
            dispatch(userActions.login(email, password));
        }
    }

    render(){
        var linkStyle = {
            textDecoration: "none"
        }
        const { LoggingIn } = this.props;
        const { email, password, submitted, error } = this.state;

        console.log(this.state)

        return (
            <div className="container">
                <h2>Log In</h2>
                {error && <Alert bsStyle="danger">
                    <strong>Error</strong>
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
// function mapStateToProps(state) {
//     console.log('fufu');
//     const { loggingIn } = false;//state.authentication;
//     return {
//         loggingIn
//     };
// }

// const connectedLoginPage = connect(mapStateToProps)(LoginPage);
// export { connectedLoginPage as LoginPage }; 
export default connect(state => state)(LoginPage);