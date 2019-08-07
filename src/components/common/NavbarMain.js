import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
// import { Link } from 'react-router-dom'


class NavbarMain extends React.Component {
  render() {



    return (
      <Navbar sticky="top" bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <NavDropdown title="Quiet Place" id="basic-nav-dropdown">

              <NavDropdown.Item href="/login">Login</NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="/register">Register</NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="sectionTwo">Quiet Places</NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="#map">Map</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">About us</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

}

export default NavbarMain
