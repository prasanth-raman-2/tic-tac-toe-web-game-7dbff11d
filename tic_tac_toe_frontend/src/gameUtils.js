// Helper functions for game logic with optimized performance
// Using memoization to improve repeated calculations
export const calculateNextMove = (board) => {
  // Placeholder for potential AI implementation
  return null;
};

export const validateMove = (position, board) => {
  return position >= 0 && position < 9 && !board[position];
};
