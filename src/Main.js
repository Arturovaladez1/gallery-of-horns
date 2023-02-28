import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {

  render() {
    return (
      <main>
       <HornedBeast title={"LongHorn"} imageUrl={"https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"} description={"Longhorn has three horns over head."}/>
       {/* <HornedBeast title={"LongHorn"} imageUrl={"https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"} description={"Longhorn has three horns over head."}/> */}
      </main>
    )
  };
}
export default Main;