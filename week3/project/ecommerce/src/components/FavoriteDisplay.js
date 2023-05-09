// import React from 'react';
// import { useEffect, useContext } from 'react';
// import useFetch from './useFetch';
// import Product from './Product';
// import IdContext from './IdContext';
// import HomeNav from './HomeNav';

// const FavoriteDisplay = () => {
//   const { favoriteId, setFavoriteId } = useContext(IdContext);

//   const { fetchData, data: products, isLoading, err } = useFetch();

//   useEffect(() => {
//     fetchData('https://fakestoreapi.com/products', '');
//   }, []);

//   return (
//     <div>
//       <HomeNav />
//       <h1>Favorite</h1>
//       {isLoading && <h4>Loading...</h4>}
//       {err && <h4>{err}</h4>}
//       {products && (
//         <Product
//           products={products.filter((product) =>
//             favoriteId.includes(product.id),
//           )}
//         />
//       )}
//       {favoriteId.length === 0 && (
//         <h3>You haven't chosen any favorites yet!</h3>
//       )}
//     </div>
//   );
// };

// export default FavoriteDisplay;