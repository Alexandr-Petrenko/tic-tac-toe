import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from "./components/Game";
import { SquareProvider } from './components/providers/SquareProvider'

// ========================================

ReactDOM.render(
  <SquareProvider>
    <Game />
  </SquareProvider>,
  document.getElementById('root')
);
