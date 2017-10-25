import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Jumbotron } from 'react-bootstrap'

import AuthenticatedRoute from '../common/AuthenticatedRoute'
import HomePage from '../HomePage/HomePage'
import AboutPage from '../AboutPage/AboutPage'
import UserPage from '../UserPage/Users'
import LoginPage from '../LoginPage/LoginPage'

class Main extends React.Component {
    render(){
        return (
            <div className="container">
                <Jumbotron>
                    <Switch>
                        <AuthenticatedRoute exact path='/' component={HomePage} />
                        <AuthenticatedRoute exact path='/home' component={HomePage} />
                        <AuthenticatedRoute path='/user' component={UserPage} />
                        <Route exact path='/about' component={AboutPage} />
                        <Route exact path='/login' component={LoginPage} />
                    </Switch>
                </Jumbotron>
            </div>
        );
    }
}

export default Main