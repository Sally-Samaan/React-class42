import React from 'react';
import ProductDisplay from './components/ProductDisplay';
import Home from './components/Home';
// import FavoriteDisplay from './components/FavoriteDisplay';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { IdProvider } from './components/IdContext';

const App = () => {
  return (
    <Router>
      <IdProvider>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDisplay />} />
            {/* <Route path="/favorite" element={<FavoriteDisplay />}></Route> */}
          </Routes>
        </div>
      </IdProvider>
    </Router>
  );
};

export default App;