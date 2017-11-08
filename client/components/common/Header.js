import React from 'react'
import { Navbar, Nav, NavItem }from 'react-bootstrap'
import { LinkContainer }from 'react-router-bootstrap'

class Header extends React.Component {
    render() {
        var navStyle = {
            marginBottom: "0"
        }
        let user = JSON.parse(localStorage.getItem('user'));
        return (
            <div>
                <Navbar className="navbar-fixed-top" style={navStyle} collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            Playground 3
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to="/home"><NavItem eventKey={1}>Home</NavItem></LinkContainer>
                            <LinkContainer to="/addTask"><NavItem eventKey={2}>Add</NavItem></LinkContainer> {/* TODO: remove */}
                            <LinkContainer to="/users"><NavItem eventKey={2}>User</NavItem></LinkContainer>
                        </Nav>
                        <Nav pullRight>
                            {!user && <LinkContainer to="/login"><NavItem eventKey={4}>Log In</NavItem></LinkContainer>}
                            {!user && <LinkContainer to="/register"><NavItem eventKey={5}>Register</NavItem></LinkContainer>}
                            {user && <NavItem><span>Hi, {user.email}</span></NavItem>}
                            {user && <LinkContainer to="/login"><NavItem eventKey={5}>Logout</NavItem></LinkContainer>}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }

}

export default Header