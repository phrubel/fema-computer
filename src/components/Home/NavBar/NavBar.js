import React from "react";
import { Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="primary" variant="dark" className="p-3">
      <div className="container">
      <Navbar.Brand href="">Fema Computers</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto text-dark">
            <Nav.Link href="#features" className="text-warning font-weight-bold ">Home</Nav.Link>
            <Nav.Link href="#pricing" className="font-weight-bold">Service</Nav.Link>
            <Nav.Link href="#pricing" className="font-weight-bold">Our Team</Nav.Link>
            <Nav.Link href="#pricing" className="font-weight-bold">Dashboard</Nav.Link>
            <Nav.Link href="#pricing" className="font-weight-bold">Contact us</Nav.Link>
            <Nav.Link href="#pricing" className="bg-danger font-weight-bold">Login</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </div>
      </Navbar>
     
    </div>
  );
};

export default NavBar;
