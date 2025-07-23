// Simple statistics tracking for game sessions
const defaultStats = {
  gamesPlayed: 0,
  xWins: 0,
  oWins: 0,
  draws: 0,
};

export const getGameStats = () => {
  return JSON.parse(localStorage.getItem('gameStats')) || defaultStats;
};

export const updateGameStats = (result) => {
  const stats = getGameStats();
  stats.gamesPlayed++;
  
  if (result === 'X') stats.xWins++;
  else if (result === 'O') stats.oWins++;
  else stats.draws++;
  
  localStorage.setItem('gameStats', JSON.stringify(stats));
};
