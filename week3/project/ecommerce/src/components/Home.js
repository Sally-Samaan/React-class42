import React, { useEffect }  from 'react';
import Header from './Header';
import Favorite from './Favorite';
import Product from './Product';
import Categories from './Categories';
import useFetch from './useFetch';
import HomeNav from './HomeNav';

const Home = () => {
  const { fetchData, data: products, isLoading, err } = useFetch();

  useEffect(() => {
    fetchData('https://fakestoreapi.com/products', '');
  }, []);

  function showName(category) {
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
      <Favorite />
      <HomeNav />
      <Header />
      {products && <Categories onClick={showName} />}
      {isLoading && <h4>Loading...</h4>}
      {err && <h4>{err}</h4>}
      {products && <Product products={products} />}
    </div>
  );
};

export default Home;
