import './App.css';
import Header from './components/Header';
import Products from './components/Products/Products';
import logo123 from './assets/img/logo.png';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

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
