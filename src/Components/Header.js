import React, { Component } from "react";
import { Form, Button, Navbar, Nav } from "react-bootstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { }

  render() {
    let buttonText = this.props.propIsUserAuthenticated ? "Logout" : "Login";
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">openSplint.io</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline className="justify-content-end">
          <Button variant="link">Home</Button>
          <Button variant="link">Prototypes</Button>
          <Button variant="link">About Us</Button>
          <Button
            id='lnkLogin'
            variant="link"
            onClick={this.props.propHandleLogin}
          >
            {buttonText}
          </Button>
        </Form>
      </Navbar>
    );
  }
}