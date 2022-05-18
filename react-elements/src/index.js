import React from 'react';
import ReactDOM from 'react-dom/client';

const container = document.querySelector('#root');

const reactElement = React.createElement(
  'h1',
  [null],
  ['Hello, React!']
);

const root = ReactDOM.createRoot(container);
root.render(reactElement);

console.log(reactElement);
