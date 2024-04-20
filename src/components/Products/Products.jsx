import React, { useState } from 'react';
import ProductCard from './../ProductCard/ProductCard';

const Products = () => {
  let products = [
    { id: 1, name: 'Кексы', price: '100' },
    { id: 2, name: 'Пирожное', price: '200' },
    { id: 3, name: 'Торт', price: '150' },
    { id: 4, name: 'Кекс', price: '300' },
  ];

  return (
    <div className="items">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Products;
