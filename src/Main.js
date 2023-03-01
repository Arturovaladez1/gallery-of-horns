import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';


class Main extends React.Component {

  render() {
    console.log(this.props.data);
    let horns = [];
    this.props.data.forEach((horn, idx) => {
      horns.push(
        <HornedBeast
          title={horn.name}
          imageUrl={horn.image_url}
          description={horn.description}
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

