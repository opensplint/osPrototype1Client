import React, { Component } from "react";
import { Button } from 'react-bootstrap';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { }

  render() {
    return (
      <footer id="footer" className="justify-content-center">
        <hr />
        <div className="d-flex justify-content-center">
          <Button variant="link">Home</Button>
          <Button variant="link">About Us</Button>
        </div>
      </footer>
    );
  }
}