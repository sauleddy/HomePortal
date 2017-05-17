import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DropzoneComponent from 'react-dropzone-component';

class ModalNormal extends Component {

  constructor(props) {
    super(props);

    this.djsConfig = {
        addRemoveLinks: true,
        acceptedFiles: "image/jpeg,image/png,image/gif",
        autoProcessQueue: false
    };

    this.componentConfig = {
        iconFiletypes: ['.jpg', '.png', '.gif'],
        showFiletypeIcon: true,
        postUrl: '/uploadHandler'
    };

    this.dropzone = null;
  }

  handleFileAdded(file) {
      console.log(file);
      //console.log(this.dropzone.getQueuedFiles());

      
  }

  render() {
    const config = this.componentConfig;
    const djsConfig = this.djsConfig;

    // For a list of all possible events (there are many), see README.md!
    const eventHandlers = {
        init: dz => this.dropzone = dz,
        addedfile: this.handleFileAdded.bind(this)
    }


    return (
      <div className="animated fadeIn">
        <Modal isOpen={this.props.visible} className={this.props.className}>
          <ModalHeader>{this.props.title}</ModalHeader>
          <DropzoneComponent config={config} />
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
