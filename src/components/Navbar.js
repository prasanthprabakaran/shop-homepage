import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar,Container,Nav,NavDropdown,Form } from "react-bootstrap";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const navbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Shopping.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Shop</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                All Products
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Popular items</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                New Arrivals
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex">
          <button className="btn btn-outline-dark" type="submit">
            <i><FontAwesomeIcon icon={faCartShopping}/></i> Cart<span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
          </button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default navbar;
