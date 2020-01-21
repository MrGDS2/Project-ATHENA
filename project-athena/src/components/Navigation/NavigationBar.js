import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';





const NavigationBar = () => (
   
        <Navbar expand="lg">
            <Navbar.Brand href="/home">Athena</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className ="ml-auto">
                <Nav.Item><Nav.Link href="/home">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/signIn">Sign In </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/signUp">Register </Nav.Link></Nav.Item>
            </Nav>
    </Navbar.Collapse>
        </Navbar>

)


export default NavigationBar;