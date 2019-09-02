import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    console.log(fish);

    const fishes = {...this.state.fishes} // Copies state, not a deep clone
    fishes[`fish${Date.now()}`] = fish; // Using timestamp to append to "fish" for uniqueness
    this.setState({ fishes: fishes }); // setState manages updating state.fishes

  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;

