import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data.json';
import './App.css';
import Modal from 'react-bootstrap/Modal'
// import { ModalBody } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: '',
      title: '',
      showMOdal: false,
      description: ''
    }
  }




  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  }

  handleOpenModal = (title, url, description) => {
    this.setState({
      showModal: true,
      image_url: url,
      title: title,
      description: description,
    });
  }

  render() {
    return (
      <>
        <Header image={this.state.images} />
        <Main data={data}
          openModal={this.openModal}
          // addImages={this.addImages}
          handleOpenModal={this.handleOpenModal}
        />
        <Footer />
        <Modal
          show={this.state.showModal}
          onHide={this.handleCloseModal}>

          <Modal.Header>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.state.image_url} alt={this.state.title} />
            <p>{this.state.description}</p>
          </Modal.Body>

        </Modal>
      </>
    );
  }
}

export default App;