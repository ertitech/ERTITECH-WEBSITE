import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import './HeaderEr.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderEr = () => {
  return (
    <Navbar bg="light" expand="md" className="header-navbar">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="https://i.postimg.cc/xTNYpnxL/ertitech.png"
            className="d-inline-block align-top logo"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center" >
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#pricing">Pricings</Nav.Link> 
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
          <Button className="sign-in-btn d-md-none">Sign Up/Login</Button>
        </Navbar.Collapse>
        <Button className="sign-in-btn d-none d-md-inline">Sign Up/Login</Button>
      </Container>
    </Navbar>
  );
};

export default HeaderEr;
