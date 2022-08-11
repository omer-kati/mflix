import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import Link from "next/link";
import {useRouter} from "next/router";

const NavbarComp = () => {
    const router = useRouter();

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Link href="/add" passHref>
                            <Nav.Link>Add</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComp;
