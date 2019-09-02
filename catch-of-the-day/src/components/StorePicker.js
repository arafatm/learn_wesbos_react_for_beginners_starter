import React from 'react';

class StorePicker extends React.Component { 

  render() { // Every React.Component requires a render()
    return (
      <form action="" className="store-picker">
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

export default StorePicker; // Allow StorePicker component