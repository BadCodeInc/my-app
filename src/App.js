import './App.css';
import Header from './components/Header';
import Products from './components/Products/Products';
import logo123 from './assets/img/logo.png';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
