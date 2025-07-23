// Helper functions for game logic
export const calculateNextMove = (board) => {
  // Placeholder for potential AI implementation
  return null;
};

export const validateMove = (position, board) => {
  return position >= 0 && position < 9 && !board[position];
};
