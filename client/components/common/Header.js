import React from 'react'
import { Navbar, Nav, NavItem }from 'react-bootstrap'
import { LinkContainer }from 'react-router-bootstrap'

class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Playground 3</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <LinkContainer to="/home"><NavItem eventKey={1}>Home</NavItem></LinkContainer>
                        <LinkContainer to="/users"><NavItem eventKey={2}>User</NavItem></LinkContainer>
                        <LinkContainer to="/about"><NavItem eventKey={2}>About</NavItem></LinkContainer>
                    </Nav>
                </Navbar>
            </div>
        );
    }

}

export default Header