import React, {useEffect} from 'react';
import Button from './Button';
// import { useEffect } from 'react';
import useFetch from './useFetch';
const Categories = ({ onClick }) => {
  const { fetchData, data, isLoading, err } = useFetch();

  useEffect(() => {
    fetchData('https://fakestoreapi.com/products/categories', '');
  }, []);

  return (
    <div className="buttonsContainer">
      {isLoading && <h4>Loading...</h4>}
      {err && <h4>{err}</h4>}
      {data &&
        data.map((category, index) => (
          <Button key={index} category={category} onClick={onClick} />
        ))}
    </div>
  );
};

export default Categories;