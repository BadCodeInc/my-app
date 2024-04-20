import './App.css';
import Header from './components/Header';
import Products from './components/Products/Products';
import logo123 from './assets/img/logo.png';

function App() {
  return (
    <div className="App">
      <img src={logo123} className="logo" />
      <Products />
    </div>
  );
}

export default App;
