import React from 'react'
import { Navbar, Nav, NavItem }from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Pager } from 'react-bootstrap'

class Footer extends React.Component {
    render() {
        return (
            <Pager>
                <Link to='/about'>About</Link>
            </Pager>
        );
    }

}

export default Footer