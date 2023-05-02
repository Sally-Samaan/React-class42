import ProductDisplay from './components/ProductDisplay';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDisplay />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
