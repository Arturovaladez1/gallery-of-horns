import React from 'react';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';



class SelectedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false,
      horn1: '',
      howToSort: ''
    }
  }

  // submitForm = (e) => {
  //   e.preventDefault();
  //   console.log(e);
  //   // let horn1 = e.target.name.value
  //   // let horn2 = e.target.name.value
  //   // let horn3 = e.target.name.value
  //   // let horn4 = e.target.name.value
  //   // this.setState.state({
  //   //   horn1:'horn1',
  //   //   howToSort: selected,
  //   // });
  // }

  filterHorns = (e) => {
    console.log(e.target.value);
    this.setState({
      howToSort: parseInt(e.target.value)
    })
  };

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state.howToSort);
    let filteredData = this.props.data.filter(horn => {
      if (horn.horns === this.state.howToSort) return horn;

    })
    this.props.handleFilter(filteredData);
  }

  render() {

    return (
      <>
        <Form onSubmit={this.submitForm}>
          <Form.Control as='select' onChange={this.filterHorns} name='How many horns' >

            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='100'>100</option>

          </Form.Control>"
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </>
    );
  }

}

export default SelectedForm
