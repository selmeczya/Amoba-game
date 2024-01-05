import React from "react";

const WinDialog = ({ winner, onRestart }) => {
  return (
    <div className="winner-display">
      {winner && (
        <div>
          <h1
            style={{ color: winner === "Player 1" ? "blue" : "red" }}
          >{`${winner} wins!`}</h1>
          <button onClick={onRestart}>New Game</button>
        </div>
      )}
    </div>
  );
};

export default WinDialog;
