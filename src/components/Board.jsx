import { useState } from 'react';
import Square from './square';

const Board = () => { 
  const [squares , setSquares] = useState(Array(9).fill(null));
  const [isXNest , setIsXNext] = useState(false);

  const handleSquareclick = clickPosition => {
    if(squares[clickPosition]) {
      return;
    }
    setSquares((currentSquare) => {
      return currentSquare.map((squaresValue , position) => {
        if (clickPosition === position) {
          return isXNest ? 'X' : 'O'; 
        } 
        return squaresValue;     
      });
    });

    setIsXNext((currentIsXNext) => !currentIsXNext);
  }
  

  const renderSquare = (position) => {
    return <Square value={squares[position]} onClick ={() => handleSquareclick(position)} />
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
