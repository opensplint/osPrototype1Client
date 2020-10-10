import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";

export default class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <div className="d-flex justify-content-center">
        <div className="font-weight-bold">Author</div>: Darshan Pandit (AI Architect)
        &nbsp;&nbsp;<div className="font-weight-bold">Description</div>: This prorotype shows avatar for your name "mr:&lt;name&gt;" using API
        &nbsp;&nbsp;<div className="font-weight-bold">Prototype</div>: 1.1
      </div>
      <hr />
      <div className="d-flex justify-content-center">
        {/* {[11, 21, 31, 41, 51].map((item, index) => ( */}
        {['mr:darshan', 'mr:rangana', 'ms:misbah', 'ms:sanchita', 'mr:sujeev', 'ms:indika'].map((item, index) => (
          <Card border="primary" style={{ width: '18rem', margin: '10px' }}>
            <Card.Header>Person {item}</Card.Header>
            {item.startsWith('mr:') ?
              <Card.Img src={'https://joeschmoe.io/api/v1/male/' + item}></Card.Img>
              : <Card.Img src={'https://joeschmoe.io/api/v1/female/' + item}></Card.Img>
            }
            <Card.Body>
              <Card.Title>Person {item}</Card.Title>
              <Card.Text>Special Person {item}</Card.Text>
            </Card.Body>
          </Card>
        ))}
        </div>
      </div>
    );
  }
}