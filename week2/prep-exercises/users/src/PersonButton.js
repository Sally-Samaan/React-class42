import React from 'react';

function PersonButton({ onClick }) {
  return (
    <button onClick={onClick}>
      Get New Person
    </button>
  );
}

export default PersonButton;