import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalNormal extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className="animated fadeIn">
        <Modal isOpen={this.props.visible} className={this.props.className}>
          <ModalHeader>{this.props.title}</ModalHeader>
          <ModalBody>
            {this.props.content}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.onOkClick}>OK</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default ModalNormal;
