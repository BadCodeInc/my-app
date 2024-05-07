import React, { useEffect, useState } from 'react';
import ProductCard from './../ProductCard/ProductCard';
import style from './Products.module.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../redux/productsSlice';

const Products = () => {
  //const [products, setProducts] = useState([]);

  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();

  const fetchItems = () => {
    axios.get('https://662a6f3467df268010a3eb19.mockapi.io/items').then((res) => {
      dispatch(setProducts(res.data));
    });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const AddProduct = () => {
    axios
      .post(
        'https://662a6f3467df268010a3eb19.mockapi.io/items',
        {
          id: '6',
          name: 'Пончики',
          price: 50,
          image:
            'https://img.povar.ru/mobile/0d/5c/7e/9d/ponchiki_na_kefire_za_15_minut-272904.JPG',
        },
        { 'content-type': 'application/json' },
      )
      .then((res) => {
        console.log(res.data);
        fetchItems();
      });
  };

  return (
    <div>
      <div className={style.items}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
