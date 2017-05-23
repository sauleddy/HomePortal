import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import Modal from 'react-modal';


class ModalNormal extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal isOpen={this.props.visible} className="modal-primary">
        <ModalHeader>{this.props.title}</ModalHeader>
        <ModalBody>
          {this.props.content}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.onOkClick}>OK</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default ModalNormal;
