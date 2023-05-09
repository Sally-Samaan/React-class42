import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
const Product = ({ products }) => {
  return (
    <div className="Container">
      {products.map((product) => {
        return (
          <div className="product" key={product.id} style={{ display: 'flex' }}>
            <div>
              <img
                className="productImage"
                src={product.image}
                alt={product.description}
              />
              <Icon id={product.id} />
            </div>

            <Link className="productTitle" to={`/product/${product.id}`}>
              {product.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Product;