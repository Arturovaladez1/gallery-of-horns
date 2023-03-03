import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data.json';
import SelectedBeasts from './SelectedBeasts';
import './App.css';
import SelectedForm from './SelectedForm';
// import { ModalBody } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: '',
      title: '',
      showModal: false,
      description: '',
      rawData: data,
      filterData: data,
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

  filterData = (filteredData) => {
    this.setState({
      filterData: filteredData
    });
  }

  render() {
    return (
      <>
        <Header image={this.state.images} />
        <SelectedForm handleFilter={this.filterData} data={this.state.rawData} />
        <Main data={this.state.filterData}
          openModal={this.openModal}
          // addImages={this.addImages}
          handleOpenModal={this.handleOpenModal}
        />
        <SelectedBeasts
          showBeast={this.state.showModal}
          hideBeast={this.handleCloseModal}
          description={this.state.description}
          name={this.state.title}
          image={this.state.image_url} />
        <Footer />

      </>
    );
  }
}

export default App;