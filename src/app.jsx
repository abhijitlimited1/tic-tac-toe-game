import "./app.css";
import Board from "./Components/Board";

export function App() {
  return (
    <div className="game bg-green-200 h-screen">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}
