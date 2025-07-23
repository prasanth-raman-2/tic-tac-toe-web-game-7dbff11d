// Symbolic constants used throughout the game
// These values should not be modified during runtime
export const GAME_SYMBOLS = {
  X: 'X',
  O: 'O',
};

export const GAME_STATES = {
  IN_PROGRESS: 'in_progress',
  WIN: 'win',
  DRAW: 'draw',
};

export const WINNING_COMBINATIONS = [
  [0, 1, 2], // Rows
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // Columns
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // Diagonals
  [2, 4, 6],
];
