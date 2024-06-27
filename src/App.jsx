/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Cell from "./components/Cell";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState(null);

  const message = `${go}'s go.`;

  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningCombos.forEach((array) => {
      let circleWins = array.every((cell) => cells[cell] === "circle");
      if (circleWins) {
        setWinningMessage("Circle Wins!");
        return;
      }
    });

    winningCombos.forEach((array) => {
      let crossWins = array.every((cell) => cells[cell] === "cross");
      if (crossWins) {
        setWinningMessage("Cross Wins!");
        return;
      }
    });
  };

  const handleReset = () => {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setGo("circle");
    setWinningMessage(null);
  };

  useEffect(() => {
    checkScore();
  }, [cells]);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-zinc-950 text-gray-100">
      <h1 className="mb-[5rem] bg-gradient-to-tr from-blue-200 to-lime-400 bg-clip-text text-4xl font-bold text-transparent">
        Tic-Tac-Toe
      </h1>
      {/* gameboard */}
      <div className="flex size-[350px] flex-wrap items-center justify-center gap-3">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            go={go}
            setGo={setGo}
            cells={cells}
            setCells={setCells}
            winningMessage={winningMessage}
          />
        ))}
      </div>
      <p className="mt-5 text-xl font-medium uppercase text-orange-400">
        {winningMessage || message}
      </p>
      {winningMessage && (
        <button
          onClick={handleReset}
          className="mt-3 rounded-md bg-orange-400 px-6 py-2 text-lg text-zinc-950 transition-colors hover:bg-orange-500"
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default App;
