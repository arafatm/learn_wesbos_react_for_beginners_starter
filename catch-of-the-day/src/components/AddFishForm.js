import React from 'react';
import { fishRand } from '../helpers.js'; 

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (e) => {
    // Stop the form from submitting
    e.preventDefault();

    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value), // convert str to float (cents)
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    console.log(fish);
  }

  render() {
    const myFish = fishRand();

    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" defaultValue={myFish[0]} />
        <input name="price" ref={this.priceRef} type="text" placeholder="Price" defaultValue={myFish[1]} />
        <select name="status" ref={this.statusRef} placeholder="Status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Desc" defaultValue={myFish[2]}></textarea>
        <input name="image" ref={this.imageRef} type="text" placeholder="Image" defaultValue={myFish[3]} />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;