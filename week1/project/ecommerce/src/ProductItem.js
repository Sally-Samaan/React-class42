import React from 'react';

const ProductItem = ({ product }) => {
  const formattedPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    font: 'Courier',
    currency: 'EUR',
  }).format(product.price);

  return (
    <li>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} title={product.title} />
      <p>{formattedPrice}</p>
    </li>
  );
};

export default ProductItem;