import React from 'react';
import './Main.css';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';

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
    })
  }

  render() {
    console.log(this.props);

    return (
      <article>
        <card>
          <h2>{this.props.title}</h2>
          <p>👍{this.state.likes} <Badge bg="danger"></Badge>likes</p>
          <Card.Img onClick={this.handleLikes} variant="top" src={this.props.imageUrl} alt={this.props.description} title={this.props.title} />
          <Card.Body>
            <Card.Text>
              {this.props.description}
            </Card.Text>
          </Card.Body>
        </card>
      </article>
    )
  };
}

export default HornedBeast;