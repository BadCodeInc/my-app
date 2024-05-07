import React from 'react';
import style from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { addItem, deleteItem, minusItem } from '../../redux/cartSlice';

const CartItem = ({ id, name, price, count }) => {
  const dispatch = useDispatch();
  const onClickAdd = () => {
    dispatch(addItem({ id }));
  };

  const onClickDelete = () => {
    dispatch(deleteItem({ id }));
  };
  const onClickMinus = () => {
    dispatch(minusItem({ id }));
  };
  return (
    <div>
      <div className={style.root}>
        <p>{name}</p>
        <button disabled={count == 1} onClick={onClickMinus}>
          -
        </button>
        <p>{count}</p>
        <button onClick={onClickAdd}>+</button>
        <p>{price} руб</p>
        <button onClick={onClickDelete}>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
