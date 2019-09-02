import React from 'react';
import { getFunName } from '../helpers.js';

class StorePicker extends React.Component {

  handleClick() {
    alert("Heyyy!");
  }
  render() { // Every React.Component requires a render()
    return (
      <form action="" className="store-selector">
        <h2>Please Enter A Store</h2>
        <button onClick={this.handleClick}>Click me!</button>
        <input type="text" required placeholder="Store Name" defaultValue={ getFunName() } />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

export default StorePicker; // Allow StorePicker component