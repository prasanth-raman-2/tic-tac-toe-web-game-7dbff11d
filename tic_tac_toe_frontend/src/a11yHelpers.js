export const ARIA_LABELS = {
  gameBoard: 'Tic Tac Toe Game Board',
  cell: (index) => `Game board cell ${index + 1}`,
  resetButton: 'Reset Game',
  gameStatus: 'Game Status',
};

export const getFocusableElements = (container) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const setupKeyboardNavigation = (container) => {
  const elements = getFocusableElements(container);
  elements[0]?.focus();
};
