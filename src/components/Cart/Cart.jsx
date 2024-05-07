import React from 'react';
import CartItem from '../CartItem/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems } from '../../redux/cartSlice';

const Cart = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Корзина</h1>
      {items.map((obj) => (
        <CartItem key={obj.id} {...obj} />
      ))}
      <button
        onClick={() => {
          dispatch(clearItems());
        }}>
        Clear
      </button>
    </div>
  );
};

export default Cart;
