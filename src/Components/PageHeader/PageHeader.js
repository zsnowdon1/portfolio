import React from "react";
import { Navbar, Nav, NavDropdown} from "react-bootstrap";
import './PageHeader.css'

function PageHeader() {

    return (
        <Navbar expand="lg" className="header">
            <Navbar.Brand href="/" className="brand">Zsnowdon</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="/" className="link">Home</Nav.Link>
                    <Nav.Link href="/" className="link">About</Nav.Link>
                    <NavDropdown title="Applications" id="nav-dropdown">
                        <NavDropdown.Item href='/connect4' id="dropdown-item">AI Connect 4</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default PageHeader;