import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
            <Container>
                {/* Centered Brand Name */}
                <Navbar.Brand href="/" className="mx-auto text-center" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    Premier League Top 10
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    {/* Centered Navigation Links */}
                    <Nav className="text-center">
                        <NavLink to="/" className="nav-link mx-2" style={{ fontSize: '1.2rem' }}>
                            Home
                        </NavLink>
                        <NavLink to="/players" className="nav-link mx-2" style={{ fontSize: '1.2rem' }}>
                            Players
                        </NavLink>
                        <NavLink to="/add-player" className="nav-link mx-2" style={{ fontSize: '1.2rem' }}>
                            Add Player
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
