import React from 'react'; // Can import from packages in package.json
import { render } from 'react-dom'; // Only need render from this package

import StorePicker from './components/StorePicker';

render(<StorePicker />, document.querySelector('#main'));