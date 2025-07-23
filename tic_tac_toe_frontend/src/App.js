// This is an interactive Tic Tac Toe game with turn-based gameplay and win detection
import React, { useState } from 'react';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameEnded, setGameEnded] = useState(false);

  // Calculate winner
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  // Check if game is a draw
  const isDraw = (squares) => {
    return squares.every(square => square !== null);
  };

  // Handle cell click
  const handleClick = (index) => {
    if (board[index] || gameEnded) return;

    const newBoard = board.slice();
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);

    const winner = calculateWinner(newBoard);
    if (winner || isDraw(newBoard)) {
      setGameEnded(true);
    } else {
      setXIsNext(!xIsNext);
    }
  };

  // Reset game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setGameEnded(false);
  };

  // Get game status message
  const getStatus = () => {
    const winner = calculateWinner(board);
    if (winner) {
      return `Winner: ${winner}`;
    } else if (isDraw(board)) {
      return "Game ended in a draw!";
    } else {
      return `Current player: ${xIsNext ? 'X' : 'O'}`;
    }
  };

  // Render a single cell
  const renderCell = (index) => {
    const value = board[index];
    return (
      <button
        className={`board-cell ${value?.toLowerCase()}`}
        onClick={() => handleClick(index)}
        aria-label={`Cell ${index}, ${value || 'empty'}`}
      >
        {value}
      </button>
    );
  };

  return (
    <div className="App">
      <h1 className="game-title">Tic Tac Toe</h1>
      <div className="game-info" role="status" aria-live="polite">
        {getStatus()}
      </div>
      <div className="game-board" role="grid">
        {Array(9).fill(null).map((_, index) => (
          renderCell(index)
        ))}
      </div>
      <button 
        className="reset-button"
        onClick={resetGame}
        aria-label="Reset game"
      >
        Reset Game
      </button>
    </div>
  );
}

export default App;
