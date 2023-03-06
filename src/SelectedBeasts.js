import React from 'react';
import { Modal } from 'react-bootstrap';

class SelectBeasts extends React.Component {

  render() {

    return (
      <>
        <Modal
          show={this.props.showBeast}
          onHide={this.props.hideBeast} >

          <Modal.Header>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.image} alt={this.props.title} />
            <p>{this.props.description}</p>
          </Modal.Body>

        </Modal>
      </>
    )
  }
};

export default SelectBeasts;