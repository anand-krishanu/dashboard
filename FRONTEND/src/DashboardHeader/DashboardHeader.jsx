import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    const isSignedIn = false;

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="px-4 navbar">
            <Container>
                <Navbar.Brand className="nav-heading" href="/">Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        {isSignedIn ? (
                            <Nav.Link className="text-light d-flex align-items-center">
                                <FaUserCircle className="me-2" size={22} />
                                Welcome, User
                            </Nav.Link>
                        ) : (
                            <Nav.Link href="/login" className="text-light">
                                <FaUserCircle className="me-2" />
                                Login
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
