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
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to="/home"><NavItem eventKey={1}>Home</NavItem></LinkContainer>
                            <LinkContainer to="/users"><NavItem eventKey={2}>User</NavItem></LinkContainer>
                            <LinkContainer to="/about"><NavItem eventKey={3}>About</NavItem></LinkContainer>
                        </Nav>
                        <Nav pullRight>
                            <LinkContainer to="/login"><NavItem eventKey={4}>Log In</NavItem></LinkContainer>
                            <LinkContainer to="/register"><NavItem eventKey={5}>Register</NavItem></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }

}

export default Header