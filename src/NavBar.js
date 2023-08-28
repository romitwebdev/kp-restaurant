import React, { createContext, useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { GiKebabSpit } from "react-icons/gi";
import { ContextFunc } from "./ContextProvider";

const NavBar = () => {
    const { currentData } = ContextFunc();

    return (
        <>
            <Navbar bg="danger" expand="lg" variant="light" fixed="top">
                <Container>
                    <Navbar.Brand className="brand_name">
                        <GiKebabSpit className="d-inline-block me-1 brand_logo" />
                        <p className="brand_title">
                            Kp Restaurant - {currentData.name}
                        </p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-nav-bar"></Navbar.Toggle>
                    <Navbar.Collapse
                        id="basic-nav-bar"
                        className="justify-content-end"
                    >
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#menus">Menus</Nav.Link>
                        </Nav>
                        <Navbar.Text className="ms-2">
                            <a href="tel:+351920045366">
                                Call us: +351920045366
                            </a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
