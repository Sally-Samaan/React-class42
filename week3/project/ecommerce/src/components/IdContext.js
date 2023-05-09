import React, { createContext, useState, useEffect } from 'react';

const IdContext = createContext();

export function IdProvider({ children }) {
  const [favoriteId, setFavoriteId] = useState(() => {
    const localData = localStorage.getItem('FavoriteId');
    return localData ? JSON.parse(localData) : [];
  });
  console.log(favoriteId);

  useEffect(() => {
    localStorage.setItem('FavoriteId', JSON.stringify(favoriteId));
  }, [favoriteId]);
  return (
    <IdContext.Provider value={{ favoriteId, setFavoriteId }}>
      {children}
    </IdContext.Provider>
  );
}

export default IdContext;