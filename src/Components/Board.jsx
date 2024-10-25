import Square from "./Square";
import Winner from "./Winner";
import { useState } from "react";
import "../app.css";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  // Handle click on a square
  const handleClick = (index) => {
    if (squares[index] || Winner(squares)) return;

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  //   Reset the game
  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  // Render each square
  const renderSquare = (index) => {
    return <Square value={squares[index]} onClick={() => handleClick(index)} />;
  };

  const winner = Winner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next Player: ${isXNext ? "X" : "O"}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
      </div>
      <button id="reset-btn" className="reset-button" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
}

export default Board;
