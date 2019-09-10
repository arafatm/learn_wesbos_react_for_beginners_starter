import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

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

  loadSampleFishes = () => {
    console.log('Loading Sample Fishes');
    this.setState({ fishes: sampleFishes });
  }

  addToOrder = (key) => {
    // 1. take a copy of state
    // 2. add or increment a fish to the order
    // 3. call setState to update our state
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(
              key => <Fish key={key} details={this.state.fishes[key]} />
            )}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    );
  }
}

export default App;

