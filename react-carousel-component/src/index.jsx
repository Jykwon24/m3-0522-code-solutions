import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const images = [
  {
    id: '1',
    url: 'images/001.png',
    alt: 'bulbasaur-img'
  },
  {
    id: '2',
    url: 'images/004.png',
    alt: 'charmander-img'
  },
  {
    id: '3',
    url: 'images/007.png',
    alt: 'squirtle-img'
  },
  {
    id: '4',
    url: 'images/025.png',
    alt: 'pikachu-img'
  },
  {
    id: '5',
    url: 'images/039.png',
    alt: 'jigglypuff-img'
  }
];

root.render(<Carousel images={images}/>);
