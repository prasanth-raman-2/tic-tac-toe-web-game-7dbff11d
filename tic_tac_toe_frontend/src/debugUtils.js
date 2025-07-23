export const DEBUG_MODE = process.env.NODE_ENV === 'development';

export const logGameState = (gameState) => {
  if (DEBUG_MODE) {
    console.log('Current Game State:', gameState);
  }
};

export const validateGameState = (gameState) => {
  if (DEBUG_MODE) {
    // Add validation logic here
    console.log('Game State Validated');
  }
};
