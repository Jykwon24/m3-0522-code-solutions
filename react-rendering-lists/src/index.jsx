import React from 'react';
import ReactDOM from 'react-dom/client';

const container = document.querySelector('#root');

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function RenderList(props) {
  const listItems = pokedex.map(element =>
  <li key={element.number}>{element.name}</li>
  );
  return (
      <ul>{listItems}</ul>
  );
}

const root = ReactDOM.createRoot(container);
root.render(<RenderList />);
