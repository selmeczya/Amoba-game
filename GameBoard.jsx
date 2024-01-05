import React, { useState } from "react";
import { checkForWin } from "./GameLogic.jsx";
import WinDialog from "./WinDialog.jsx";

function GameBoard() {
  const initialGrid = [
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ];

  // Initial player
  const initialPlayer = "Player 1";
  let winnerText = "";

  // State to store the content of the div
  const [grid, setGrid] = useState(initialGrid);
  // State to store the current player
  const [currentPlayer, setCurrentPlayer] = useState(initialPlayer);
  const [winner, setWinner] = useState(null);

  const handleClick = (row, col) => {
    if (winner) {
      // If there's already a winner, don't allow further moves
      return;
    }
    // Create a new grid with the clicked div's content changed
    const newGrid = [...grid];

    const symbol = currentPlayer === "Player 1" ? "X" : "O"; // Assuming X and O for players

    if (grid[row][col] == "") {
      newGrid[row][col] = symbol;

      // Update the state with the new grid
      setGrid(newGrid);

      if (checkForWin(newGrid, symbol) === true) {
        setWinner(currentPlayer);
        winnerText = "winner is " + currentPlayer + " (" + symbol + ")";
      }
      // Switch player for the next turn
      else
        setCurrentPlayer(
          currentPlayer === "Player 1" ? "Player 2" : "Player 1"
        );
    }
  };

  const handleRestart = () => {
    // Reset the game state
    setGrid(initialGrid);
    //setClickedCell({ row: null, col: null });
    setCurrentPlayer("Player 1");
    setWinner(null);
  };

  return (
    <div>
      <h1>Amőba Game</h1>
      <h3>
        This is a five-in-a-row tic-tac-toe game variant popular in Hungary.
      </h3>
      <h2 style={{ color: currentPlayer === "Player 1" ? "blue" : "red" }}>
        {currentPlayer}({currentPlayer === "Player 1" ? "X" : "O"}) is going
      </h2>
      <div className="grid">
        {grid.map((row, i) => (
          <div key={i} style={{ display: "flex" }}>
            {row.map((cell, j) => (
              <div
                className="grid-cell"
                key={j}
                style={{ color: cell == "X" ? "blue" : "red" }}
                onClick={() => handleClick(i, j)}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      {winner && (
        <>
          <WinDialog winner={winner} onRestart={handleRestart} />
        </>
      )}
    </div>
  );
}

export default GameBoard;
