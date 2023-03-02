import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';


class Main extends React.Component {
  render() {
    let horns = this.props.data.map((horn, idx) => {
      return(
        <HornedBeast
          title={horn.title}
          image_url={horn.image_url}
          description={horn.description}
          addImages={this.props.addImages}
          handleOpenModal={this.props.handleOpenModal}
          key={idx}
        />
      )

    });

    return (

      <main>
        {horns}
      </main>
    )
  };
}
export default Main;

