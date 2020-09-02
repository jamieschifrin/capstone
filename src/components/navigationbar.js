import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Dropdown, dropdown, NavDropdown  } from 'react-bootstrap';

const Styles = styled.div`
  .navbar {
    background-color: CornflowerBlue;
    

  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: black;
    &:hover {
      color: white;
    }

    
  }

  #basic-nav-dropdown a {
    color: blue;
    font-weight: bold;
    background-color: red;
}


`;

export default class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Styles>
                    <Navbar expand="lg" >
                    <Navbar.Brand href="/">CINCYLIFESTYLE.COM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav " />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="ml-auto">                        
                            
                        <Nav.Item>
                            <Nav.Link>
                            <Link to="/">Home</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <NavDropdown title="Attractions" id="basic-nav-dropdown " >
                                <NavDropdown.Item href="/attractions">Add Attraction</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">View Attractions</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        <Nav.Item>
                            <Nav.Link>
                            <Link to="/about">About</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                            <Link to="/contact">Contact</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                            <Link to="/blog">Blog</Link>
                            </Nav.Link>
                        </Nav.Item>
                        
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </Styles >
            </div>
        )
    }
}
