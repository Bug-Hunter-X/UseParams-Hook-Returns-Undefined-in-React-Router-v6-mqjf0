# React Router v6 useParams Hook Issue

This repository demonstrates a common issue encountered when using the `useParams` hook in React Router v6.  The `useParams` hook only provides access to route parameters within components rendered by a route element.  If you use `useParams` outside of this context, it will always return `undefined`.

## Bug

The `bug.js` file showcases the incorrect usage of `useParams`, resulting in undefined values.  The solution is in `bugSolution.js`

## Solution

The `bugSolution.js` file demonstrates the correct way to use `useParams` within the context of a route component.

## How to reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Observe the console output in both examples.