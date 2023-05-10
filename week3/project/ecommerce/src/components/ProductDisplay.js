import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import useFetch from './useFetch';
import Icon from './Icon';

const ProductDisplay = () => {
  const { id } = useParams();

  const { fetchData, data: product, isLoading, err } = useFetch();
  useEffect(() => {
    fetchData('https://fakestoreapi.com/products/', id);
  }, []);

  return (
    <div>
      {isLoading && <h4>Loading...</h4>}
      {err && <h4>{err}</h4>}
      {product && <Icon id={product.id} />}
      {product && <h1>{product.title}</h1>}
      {product && <img src={product.image} alt="" />}

      {product && <p>{product.description}</p>}
    </div>
  );
};

export default ProductDisplay;
