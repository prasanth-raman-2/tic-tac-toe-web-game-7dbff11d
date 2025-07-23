import { useState, useEffect } from 'react';

export const useGameHistory = () => {
  const [history, setHistory] = useState([]);
  
  const addToHistory = (move) => {
    setHistory((prev) => [...prev, move]);
  };
  
  const clearHistory = () => {
    setHistory([]);
  };
  
  return { history, addToHistory, clearHistory };
};

export const useGameTimer = () => {
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return time;
};
