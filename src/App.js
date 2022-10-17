import './Assets/Styles/Global.css';
import Home from './Pages/Home'
import Products from './Pages/Products'
import Product from './Pages/Product'
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;
