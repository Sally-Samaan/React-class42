import { Link } from 'react-router-dom';

const Product = ({ products }) => {
  return (
    <div className="Container">
      {products.map((product) => {
        return (
          <div className="product" key={product.id} style={{ display: 'flex' }}>
            <img
              className="productImage"
              src={product.image}
              alt={product.description}
            />
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
