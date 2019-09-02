import React from 'react';
import { getFunName } from '../helpers.js';

class StorePicker extends React.Component {

  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }
  myInput = React.createRef();

  goToStore(event) {
    // stop the form from submitting
    event.preventDefault(); 

    // get the text from the input

    // route to /store/whatever-they-entered

    console.log(this);
  }

  render() { // Every React.Component requires a render()
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