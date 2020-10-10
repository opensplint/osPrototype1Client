import React, { Component } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="d-flex justify-content-center">
        <Form>
          <Form.Group as={Row} controlId="txtLogin">
            <Form.Label column="true" sm="4">
              Login
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                placeholder="Login Name"
                onChange={this.props.propHandleChange}
              ></Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="txtPassword">
            <Form.Label column="true" sm="4">
              Password
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={this.props.propHandleChange}
              ></Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm="4"></Col>
            <Col sm="8">
              <Button
                column="true"
                sm="8"
                variant="outline-primary"
                id="btnLogin"
                onClick={this.props.propHandleLogin}
              >
                Login
              </Button>

            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm="4"></Col>
            <Col sm="8">
              Please enter username:demo, password:demo to login as guest.
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
