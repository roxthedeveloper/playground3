import React from 'react'
import { Navbar, Nav, NavItem }from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Pager } from 'react-bootstrap'

class Footer extends React.Component {
    render() {
        return (
            <Pager>
                <Pager.Item>
                    <Link to='/about'>About</Link>
                </Pager.Item>
            </Pager>
        );
    }

}

export default Footer