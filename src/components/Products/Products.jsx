import React, { useEffect, useState } from 'react';
import ProductCard from './../ProductCard/ProductCard';
import style from './Products.module.css';
import axios from 'axios';

const Products = () => {
  // let products = [
  //   { id: 1, name: 'Кексы', price: '100' },
  //   { id: 2, name: 'Пирожное', price: '200' },
  //   { id: 3, name: 'Торт', price: '150' },
  //   { id: 4, name: 'Кекс', price: '300' },
  // ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://662a6f3467df268010a3eb19.mockapi.io/items').then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className={style.items}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Products;
