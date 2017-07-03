import React from 'react';
import App from './App';
import { render } from 'react-dom';
import 'sass/minesweeper.scss';

render(
  <App />,
  document.querySelector('.app')
);
