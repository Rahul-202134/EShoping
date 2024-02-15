import './App.css';
import Home from './Screens/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Cart from './Screens/Cart';
import Product from './Screens/Product';

function App() {
  const divStyle = {
    backgroundColor: '#282c34',
    color: 'white',
  };
  return (
    <Router>
      
      <div style={divStyle}>
        <Routes>
          <Route exact path='' element={<Home/>}/>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='/Signup' element={<Signup/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/product' element={<Product/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
