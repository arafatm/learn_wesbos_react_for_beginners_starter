# Wes Bos: React for Beginners


Course streams https://courses.wesbos.com/account

Starter code https://github.com/wesbos/React-For-Beginners-Starter-Files

## Introduction, Tooling and Editor Setup

Install:
- nodejs
- Chrome plugin for react
- VSCode plugin for Babel

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

## Thinking and Understanding React Components

Everything in React is a **Component**
- reusable code
- allows you to build your own "html" tags e.g. `<Fish />`

xxx
## Creating our First Components

## Writing HTML with JSX

## Loading CSS into our React Application

## Creating our application layout with components

## Passing Dynamic data with props

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
