import "./app.css";
import Board from "./Components/Board";

export function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}
