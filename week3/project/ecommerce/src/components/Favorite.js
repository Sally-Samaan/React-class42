import React, { useContext } from 'react';
import IdContext from './IdContext';

const Favorite = () => {
  const { favoriteId } = useContext(IdContext);

  return (
    <div>
      <h3 className='favorite'>Favorite {favoriteId.length}</h3 >
    </div>
  );
};

export default Favorite;