import Header from './Header';

import Product from './Products';
import Categories from './Categories';
import { useEffect } from 'react';
import useFetch from './useFetch';

const Home = () => {
  const { fetchData, data: products, isLoading, err } = useFetch();

  useEffect(() => {
    fetchData('https://fakestoreapi.com/products', '');
    // eslint-disable-next-line
  }, []);

  function printName(category) {
    const url = 'https://fakestoreapi.com/products/category/';
    if (category === 'electronics') {
      fetchData(url, category);
    } else if (category === 'jewelery') {
      fetchData(url, category);
    } else if (category === "men's clothing") {
      fetchData(url, category);
    } else if (category === "women's clothing") {
      fetchData(url, category);
    }
  }
  return (
    <div>
      <Header />
      {products && <Categories onClick={printName} />}
      {isLoading && <h4>Loading...</h4>}
      {err && <h4>{err}</h4>}
      {products && <Product products={products} />}
    </div>
  );
};

export default Home;
