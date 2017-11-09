import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Jumbotron, Col } from 'react-bootstrap'

import AuthenticatedRoute from '../common/AuthenticatedRoute'
import HomePage from '../HomePage/HomePage'
import AboutPage from '../AboutPage/AboutPage'
import UserPage from '../UserPage/Users'
import LoginPage from '../LoginPage/LoginPage'
import RegisterPage from '../RegisterPage/RegisterPage'
import AddWorkEventPage from '../AddWorkEventPage/AddWorkEventPage'

class Main extends React.Component {
    render(){
        return (
            <div style={{marginTop: "50px"}}>
                <Jumbotron>
                    <Switch>
                        <AuthenticatedRoute exact path='/' component={HomePage} />
                        <AuthenticatedRoute exact path='/home' component={HomePage} />
                        <AuthenticatedRoute path='/user' component={UserPage} />
                        <AuthenticatedRoute exact path='/addEvent' component={AddWorkEventPage} />
                        <Route exact path='/about' component={AboutPage} />
                        <Route exact path='/login' component={LoginPage} />
                        <Route exact path='/register' component={RegisterPage} />
                    </Switch>
                </Jumbotron>
            </div>

        );
    }
}

export default Main