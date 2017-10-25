import React from 'react'
import { Navbar, Nav, NavItem }from 'react-bootstrap'
import { LinkContainer }from 'react-router-bootstrap'

import Header from './common/Header'
import Main from './common/Main'

class App extends React.Component {
    constructor(props) {
		super(props);
    }
    
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}

export default App
