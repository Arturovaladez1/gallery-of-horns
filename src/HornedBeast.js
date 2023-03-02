import React from 'react';
import './Main.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }

  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  }

  handleHornedBeastClick = () => {
    this.props.handleOpenModal(this.props.title, this.props.imageurl, this.props.description);
  }

  render() {


    return (
      <>
        <Card style={{ width: '18rem' }}>
          < Card.Img onClick={this.handleHornedBeastClick} variant="top" src={this.props.imageUrl} alt={this.props.description}/>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Body>
            <Card.Text onClick={this.handleLikes}>
              {/* not sure if this is right!!! */}
              ❤️{this.state.likes} 
            </Card.Text>
            <Card.Text>
              {this.props.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  };
}

export default HornedBeast;