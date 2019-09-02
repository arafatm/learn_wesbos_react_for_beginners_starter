import React from 'react';
import { getFunName } from '../helpers.js';

class StorePicker extends React.Component {

  myInput = React.createRef();

  goToStore(event) {
    // stop the form from submitting
    event.preventDefault(); 

    // get the text from the input


    // route to /store/whatever-they-entered

    console.log(this.myInput);
  }

  render() { // Every React.Component requires a render()
    console.log(this); // to debut this StorePicker
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input 
          type="text" 
          ref={this.myInput}
          required 
          placeholder="Store Name" 
          defaultValue={getFunName()} />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

export default StorePicker; // Allow StorePicker component