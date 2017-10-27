import React from 'react'
import { Button, Col, ButtonToolbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'
import { connect } from 'react-redux';

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
            loggingIn: false
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
        const { email, password, submitted } = this.state;

        return (
            <Col md={6} mdOffset={3}>
                <h2>Log In</h2>
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
            </Col>
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