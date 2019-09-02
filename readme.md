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

**State** is the data home

**Props** is where the data goes

[:ship: 3cc09b2](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/3cc09b2) 
Example of using **props** 
- note that non-strings need to be escaped
- You can view the props in React console

:fire: 
When looking at code in the inspector, when you select an html node you'll see
something like ` == $0`. You can type that in the console to inspect that
element.
- Also, can `$1`, `$2`, etc for history of elements selected

![$0 in the console](console.0.png)

Nodes rendered by React will have `$r` as seen in the React DevTools inspector 

[:ship: e700f14](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/e700f14) 
Pass final props to Header

## Stateless Functional Components

Full `React.Component` allows things like
- define custom state
- define custom functions
- lifecycle methods e.g. `ComponentWillUnmount()`

**Stateless Functional Components** are **dumb components**. Defined as a
`function` with a single `return`
- :warning: Can't `this.props` so have to pass props as function param

[:ship: f04ecef](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/f04ecef)
Example of simple **Stateless Functional Component**

[:ship: ecddb6b](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/ecddb6b)
Stateless Functional Component as an **arrow function** with **implicit
return**
- No real benefit afaik

:warning: Maybe not the best idea in case you need to conver the
component to stateful component

## Routing with React Router

2 popular routers: `React-Router` and `Next.JS`
- using `React-Router` in this tutorial

[:ship: ecddb6b](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/3ab66f2)
Define our first root **route**

[:ship: 927391e](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/927391e)
Route for `/store/:id`

[:ship: d42baf3](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/d42baf3)
Handle a catch-all 404 route

## Helper and Utility Functions

Included in starter project is [helper.js](./catch-of-the-day/src/helpers.js)
- Note we `export function` vs `export default ...` in React
- :point_up: allows us to select which function we want to import in our React app

[:ship: b3a25ad](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/b3a25ad)
Example of using helper

## Events, Refs and this Binding

React wraps your events in
[SyntheticEvents](https://reactjs.org/docs/events.html) to ensure cross browser
compatibility

[:ship: e1924e1](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/e1924e1)
Example of click event handler

[:ship: 2586acf](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/2586acf)
:warning: Trying to use `ref` but `this` isnt referencing correctly. Have to
use component lifecycle methods
- :fire: `render()` gets called before `componentDidMount` 

[:ship: d4f5828](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/d4f5828)
:warning: Using `componentDidMount` we can now reference `this`; 
- However, `this` is not available in custom methods in component

[:ship: ae878d3](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/ae878d3)
use constructor to bind my custom method with `bind(this)` 
- :warning: Note that `super()` is required

[:ship: bc91a24](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/bc91a24)
:fire: Alternative to bind in constructor (which would be required for each
method) is to declare a **property** set to an **arrow** function 
- Property is bound to the instance

## Handling Events

[:ship: 51de9f1](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/51de9f1)
now that the event handler is bound correctly we have access to
`this.myInput.current.value`

Because StorePicker is a child of Router, we ahve access to `history` and `location`

[:ship: 0209e27](https://github.com/arafatm/learn_wesbos_react_for_beginners_starter/commit/0209e27)
Complete the routing based on the event - :warning: note the use of backticks in the `this.props.history.push`

:fire: You can see `this.props.history` in the React console

## Understanding State

xxx

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
