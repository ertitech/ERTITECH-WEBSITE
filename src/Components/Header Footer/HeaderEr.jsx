import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./HeaderEr.css";
import "bootstrap/dist/css/bootstrap.min.css";

const HeaderEr = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const location = useLocation();

  const handleClose = () => setShowOffcanvas(false);
  const handleToggle = () => setShowOffcanvas((prev) => !prev);

  const getOffcanvasWidth = () => {
    if (window.innerWidth < 768 && window.innerWidth > 407) {
      return "55%";
    } else if (window.innerWidth <= 407) {
      return "80%";
    } else {
      return "0%";
    }
  };
  const [offcanvasWidth, setOffcanvasWidth] = useState(getOffcanvasWidth());

  useEffect(() => {
    const handleResize = () => {
      setOffcanvasWidth(getOffcanvasWidth());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar
        expand="md"
        className="header-navbar fixed-top sticky-top"
        style={{
          backgroundColor: "white",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <img
            src="https://i.postimg.cc/xTNYpnxL/ertitech.png"
            className="d-inline-block align-top logo"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="mr-auto container-home borderYtoX">
            <NavLink
              to="/"
              text="Home"
              location={location}
              onClick={handleClose}
            />
            <NavLink
              to="/AboutUs"
              text="About Us"
              location={location}
              onClick={handleClose}
            />
            <NavLink
              to="/Products"
              text="Products"
              location={location}
              onClick={handleClose}
            />
            <NavLink
              to="/Pricings"
              text="Pricings"
              location={location}
              onClick={handleClose}
            />
            <NavLink
              to="/ContactUs"
              text="Contact Us"
              location={location}
              onClick={handleClose}
            />
          </Nav>
        </Navbar.Collapse>
        <Button className="sign-in-btn d-none d-md-inline">
          Sign Up/Login
        </Button>
      </Navbar>

      {/* Offcanvas component */}
      <Offcanvas
        show={showOffcanvas}
        onHide={handleClose}
        placement="end"
        style={{ width: offcanvasWidth }}
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <NavLink
              to="/"
              text="Home"
              location={location}
              onClick={handleClose}
            />
            <NavLink
              to="/AboutUs"
              text="About Us"
              location={location}
              onClick={handleClose}
            />
            <NavLink
              to="/Products"
              text="Products"
              location={location}
              onClick={handleClose}
            />
            <NavLink
              to="/Pricings"
              text="Pricings"
              location={location}
              onClick={handleClose}
            />
            <NavLink
              to="/ContactUs"
              text="Contact Us"
              location={location}
              onClick={handleClose}
            />
            <NavLink
              to="/Login"
              text="Sign Up/Login"
              location={location}
              onClick={handleClose}
            />
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const NavLink = ({ to, text, location, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const isActive = location.pathname === to;

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1000);
  };

  return (
    <Nav.Link
      as={Link}
      to={to}
      onClick={(e) => {
        onClick();
        handleClick();
      }}
      className={isActive || clicked ? "active" : ""}
    >
      {text}
    </Nav.Link>
  );
};

export default HeaderEr;
