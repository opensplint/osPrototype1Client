import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class ModalDialog extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <Modal
        show={this.props.propModalShow}
        onHide={this.props.propHandleCloseModal}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.propModalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.propModalBody}</Modal.Body>
        <Modal.Footer>
          <Button
            variant={this.props.propModalButtonVariant}
            onClick={this.props.propHandleCloseModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
