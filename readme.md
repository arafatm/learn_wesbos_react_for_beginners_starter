# Wes Bos: React for Beginners


Course streams https://courses.wesbos.com/account

Starter code https://github.com/wesbos/React-For-Beginners-Starter-Files

## Introduction, Tooling and Editor Setup

Install:
- nodejs
- Chrome plugin for react
- VSCode plugin for Babel

## Thinking and Understanding React Components

Install npm dependencies from `package.json`
- `react-scripts` does compilation to run in browser; 
  Similar to Babel or webpack
- `autoprefixer-stylus` and `stylus` for styling
- `firebase` as the db
- `re-base` realtime sync for db
- `prop-types` specify what/how data is passed in;
  split from OG react
- `react-...` core react libraries

`scripts` allow commands to be run e.g. `start` to start web
server

[:ship: f972a8a](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/f972a8a) 
```bash
npm install
```

If install fails, `rm -f package-lock.json` and `node_modules`
folders

`npm start` to start the web server

[:ship: a1cb141](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/a1cb141) test this works with an alert hello world
- edit `src/index.js` and add a `alert("hi")`

You can find the :point: code compiled 
- View source 
- search for `alert("hi")` on one of these compiled js files

```html
<script src="/static/js/bundle.js"></script><script src="/static/js/0.chunk.js"></script><script src="/static/js/main.chunk.js"></script></body>
```

## Creating our First Components

Everything in React is a **Component**
- reusable code
- allows you to build your own "html" tags e.g. `<Fish />`

[:ship:
fa5d7b2](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/fa5d7b2)
Our first `React.Component` with required `render()` 
- note that nothing will happen because we haven't **mount**ed our component

React allows us to not directly edit the DOM
- **except** when mounting React

[:ship:
a806486](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/a806486)
`react-dom.render` to attach to DOM

[:ship:
ed5fb21](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/ed5fb21)
Refactor StorePicker into it's own component class 
- Have to `export` the component in order to `render` in the DOM

## Writing HTML with JSX

[:ship:
7b9e90a](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/7b9e90a)
:warning: **not advised** example using `React.CreateElement` to render instead
of JSX
- **note** the use of `className` to set CSS class on a component

[:ship: a012ae1](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/a012ae1) 
:warning: This example won't work since `return` expects single line
- [:ship: 60e4c1c](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/60e4c1c)
  To fix previous example wrap multiline return in `return ( ... )`

[:ship: e7df666](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/e7df666)
Also cant return sibling elements
- [:ship: fc69d9c](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/fc69d9c)
  To allow sibling elements, use a `<React.Fragment>`

[:ship: b8f946a](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/b8f946a) Example of a comment


## Loading CSS into our React Application

[:ship: 6789e0c](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/6789e0c) 
Set up initial store picker

[:ship: 01005df](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/01005df)
Import CSS

## Creating our application layout with components

[:ship: d59778d](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/d59778d)
Create main `src/components/App.js`

[:ship: a88878e](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/a88878e)
Use `App` as default component

[:ship: 411df3b](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/411df3b)
Scaffold out our App with needed components

[:ship: d9e48e7](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/d9e48e7)
Skeleton `Header`, `Inventory`, and `Order` components

[:ship: bb0b977](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/bb0b977)
Header component with some pretty css

## Passing Dynamic data with props

xxx

## Stateless Functional Components

## Routing with React Router

## Helper and Utility Functions

## Events, Refs and this Binding

## Handling Events

## Understanding State

## Loading data into state onClick

## Displaying State with JSX

## Updating our Order State

## Displaying Order State with JSX

## Persisting our State with Firebase

## Persisting Order State with localstorage

## Bi-directional Data Flow and Live State Editing

## Removing Items from State

## Animating React Components

## Component Validation with PropTypes

## Authentication

## Building React for Production

## Deploying to Now

## Deploying to Netlify

## Deploying to an Apache Server

## Ejecting from create-react-app
