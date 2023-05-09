import React from 'react';
import { Link } from 'react-router-dom';

const HomeNav = () => {
  return (
    <div className='head'>
      <Link to={'/'}>Home</Link>
    </div>
  );
};

export default HomeNav;