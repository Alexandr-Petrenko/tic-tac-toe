import {createContext, useState, useContext, useEffect} from 'react';
import { squaresMap } from '../data/squaresMap';
import { winnerRows } from '../data/winnerRows';
import '../../index.css';


const SquareContext = createContext();
export const useSquare = () => useContext(SquareContext);

export const SquareProvider = ({children}) => {
  const [squares, setSquares] = useState(squaresMap);
  const [figure, setFigure] = useState('X');
  const [turnNumber, setTurnNumber] = useState(1);
  const [history, setHistory] = useState([squaresMap]);
  const [isSaveTurn, setIsSaveTurn] = useState(true);
  const [historyNumber, setHistoryNumber] = useState(-1);

  useEffect(() => {compareWithWinner()}, [squares]);

  const compareWithWinner = () => {
    const compareArr = [...winnerRows];

    for (let sub of compareArr) {
      const [first, second, third] = sub;
      let isWinner = false;

      if (squares[first].value !== '') {
        isWinner = compareValues(first, second, third);
      }

      if (isWinner) {
        const winner = figure === 'X' ? 'O' : 'X';
        alert(`winner ${winner}`);
      }
    }
  };

  const compareValues = (first, second, third) => {
    return squares[first].value === squares[second].value && squares[first].value === squares[third].value;
  };

  const newTurn = (arr) => {
    if(!isSaveTurn) {
      history.splice(historyNumber);
      setIsSaveTurn(true);
    }

    const newHistory = [...history, arr];

    setHistory(newHistory);
  };

  const moveToTurn = (number) => {
    const actualTurn = history[number];
    if (number !== history.length - 1) {
      setIsSaveTurn(false);
      setHistoryNumber(number + 1);
    } else {
      setIsSaveTurn(true);
      setHistoryNumber(-1);
    }

    if ((number === 0 || number !== 1) && number % 2 === 0) {
      setFigure('X')
    } else {
      setFigure('O');
    }

    setSquares(actualTurn);
  };


  const turnWasDone = id => {
    const squaresArr = squares.map(square => {
      if (square.id === id) {
       return {id: square.id, value: figure};
      }
      else {
        return square;
      }
    });


    setTurnNumber(turnNumber + 1);
    setFigure(turnNumber % 2 === 0 ? 'X' : 'O');
    setSquares(squaresArr);
    newTurn(squaresArr);
  };

  return (
    <SquareContext.Provider value={{turnWasDone, squares, history, moveToTurn, figure}} >
      {children}
    </SquareContext.Provider>
  );
};
