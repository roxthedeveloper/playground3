import React from 'react'
import { Navbar, Nav, NavItem }from 'react-bootstrap'
import { LinkContainer }from 'react-router-bootstrap'

import Header from './common/Header'
import Main from './Main/Main'
import Footer from './common/Footer'

class App extends React.Component {
    constructor(props) {
		super(props);
    }
    
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App
