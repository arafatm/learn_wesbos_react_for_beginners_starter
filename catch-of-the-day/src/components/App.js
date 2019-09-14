import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import { thisTypeAnnotation } from '@babel/types';
import base from '../base';

class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    // `ref` in firebase is reference to particular piece of data
    // `storeId` in React Console under App -> Props -> match : Object -> params -> storeId
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  };

  componentDidUpdate() {
    console.log(this.state.order)
    console.log("componentDidUpdate:") 
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  // Custom Methods

  addFish = (fish) => {
    console.log(fish);

    const fishes = {...this.state.fishes} // Copies state, not a deep clone
    fishes[`fish${Date.now()}`] = fish; // Using timestamp to append to "fish" for uniqueness
    this.setState({ fishes: fishes }); // setState manages updating state.fishes
  };

  loadSampleFishes = () => {
    console.log('Loading Sample Fishes');
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. add or increment a fish to the order
    order[key] = order[key] + 1 || 1; // set to 1 if empty or increment
    // 3. call setState to update our state
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key =>
              <Fish
                key={key} 
                index={key}
                details={this.state.fishes[key]} 
                addToOrder={this.addToOrder}
                />
            )}
          </ul>
        </div>
        <Order 
          fishes={this.state.fishes} 
          order={this.state.order} 
        />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    );
  };
}

export default App;

