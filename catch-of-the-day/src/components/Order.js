import React from 'react';
import { formatPrice } from '../helpers';
import { link } from 'fs';

class Order extends React.Component {

  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === 'available';

    // Make sure fish is loaded from firebase before continuing
    if (!fish) return null;

    if (!isAvailable) {
      console.log(`renderOrder isAvailable ${key}`);
      return(<li id={key} key={key}>Sorry {fish ? fish.name : 'fish'} is not available</li>)
    }
    else {
      console.log(`renderOrder unAvailable ${key}`);
      return (
      <li id={key} key={key}>
        {count} lbs {fish.name};
        {formatPrice(count * fish.price)}
      </li>
      );
    }
  }

  render() {

    const orderIds = Object.keys(this.props.order); 

    {/* Using `reduce` to iterate over array of orderIds  */}
    const total = orderIds.reduce( (prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status == 'available';

      if (isAvailable) {
        return prevTotal + (count * fish.price)
      }
      return prevTotal;
    }, 0); { /* reduce requires a starting value */}

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">
          {orderIds.map(this.renderOrder)}
        </ul>
        <div className="total">
          Total: <strong>{formatPrice(total)}</strong>
        </div>
      </div> 
    );
  }
}

export default Order;