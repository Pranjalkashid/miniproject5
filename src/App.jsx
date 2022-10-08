import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import CategoryItem from "./components/CategoryItem";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="ProductList" element={<ProductList />} />
        <Route path="Product" element={<Product />} />
        <Route path="CategoryItem" element={< CategoryItem/>} />
        <Route path="Products" element={<Products/>} />
      </Routes>
    </BrowserRouter>
  )
};
export default App;
// <Route path="Product" element={<Product />} />