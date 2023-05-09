import React, { useEffect, useState, useContext } from 'react';
import IdContext from './IdContext';

const Icon = ({ id }) => {
  const { favoriteId, setFavoriteId } = useContext(IdContext);
  const [favorite, setFavorite] = useState(false);

  const iconAddFavorite = () => {
    setFavorite(true);
    const uniqueSet = new Set([...favoriteId, id]);
    setFavoriteId([...uniqueSet]);
  };

  const iconRemoveFavorite = () => {
    setFavorite(false);
    setFavoriteId(() => favoriteId.filter((keepId) => keepId !== id));
  };

  const toggleIcon = () => {
    favoriteId.forEach((existedId) => {
      if (existedId === id) {
        setFavorite(true);
      }
    });
  };

  useEffect(toggleIcon);

  return (
    <div className='favorite'>
      {!favorite && <img src={require('../assets/heart-regular.svg').default} alt="Add to Favorites" onClick={() => iconAddFavorite()} />}
      {favorite && <img src={require('../assets/heart-solid.svg').default} alt="Remove from Favorites" onClick={() => iconRemoveFavorite()} />}
    </div>
  );
};

export default Icon;
