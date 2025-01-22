import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Cart from './Pages/Cart';
import Product from './Pages/Product'; // This should display details for a single product
import Shop from './Pages/Shop';
import Footer from './components/Footer';
import ShopCategory from './Pages/ShopCategory';
import men_banner from './components/Assets/men_banner.jpg';
import women_banner from './components/Assets/women_banner.jpg';
import electronics_banner from './components/Assets/electronics_banner.jpg';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route exact path='' element={<Home />} />
          <Route exact path='/shop' element={<Shop />} />
          <Route exact path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route exact path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route exact path='/electronics' element={<ShopCategory banner={electronics_banner} category="electronics" />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/cart' element={<Cart />} />
          {/* Updated the Product route */}
          <Route exact path='/product/:productId' element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
