import React from 'react'; // Can import from packages in package.json
import { render } from 'react-dom'; // Only need render from this package

class StorePicker extends React.Component { 

  render() { // Every React.Component requires a render()
    return <p>Hello!</p>
  }
}

render(<p>HEEEEYYYY!!!</p>, document.querySelector('#main'));