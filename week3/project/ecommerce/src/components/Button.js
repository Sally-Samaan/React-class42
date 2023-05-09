import React from 'react';
const Button = ({ category, onClick }) => {
    return (
      <button className="button" onClick={() => onClick(category)}>
        {category}
      </button>
    );
  };
  
  export default Button;