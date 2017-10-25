import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Jumbotron } from 'react-bootstrap'

import Home from './HomePage'
import About from './AboutPage'
import Users from './Users'

class Main extends React.Component {
    render(){
        return (
            <div className="container">
                <Jumbotron>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/user' component={Users} />
                        <Route exact path='/about' component={About} />
                    </Switch>
                </Jumbotron>
            </div>
        );
    }
}

export default Main