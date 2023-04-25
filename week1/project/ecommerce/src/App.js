import './App.css'
import React, {useState} from "react";
import allCategories from "./fake-data/all-categories";
import allProducts from "./fake-data/all-products"
import Category from "./Category";
import Products from './Products';

function App() {
  const [categoryId, setCategoryId] = useState(null)

  function selectCategory(e){
    const categoryId = e.target.id
    setCategoryId(categoryId);
  }
  return (
    <div className="App">
      <h1>Products</h1>
      <Category selectCategory={selectCategory} categoryId={categoryId} setCategoryId={setCategoryId}/>
      <Products selectedCategoryId={categoryId}/>
    </div>
  );
}

export default App;




// // import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
