import React from "react";
import Board from './shared/Board';
import '../index.css';
import { useSquare} from './providers/SquareProvider';

const Game = () => {
  const {history, moveToTurn, figure} = useSquare();

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{'turn is ' + figure}</div>
        <ol>
          {history.map((item, i) => (
            <button key={i} onClick={() => moveToTurn(i)}>
              {i + ' turn'}
            </button>)
          )}
        </ol>
      </div>
    </div>
  );
};

export default Game;