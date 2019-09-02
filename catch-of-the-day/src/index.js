import React from 'react'; // Can import from packages in package.json
import { render } from 'react-dom'; // Only need render from this package

import Router from './components/Router';

import "./css/style.css";

render(<Router />, document.querySelector('#main'));