import React, { useState } from 'react';
import style from './ProductCard.module.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';
import { useSelector } from 'react-redux';

const ProductCard = ({ id, name, price, image }) => {
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();

  const item = useSelector((state) => state.cart.items.find((obj) => obj.id === id));

  const addedCount = item ? item.count : 0;

  const onClickAdd = () => {
    dispatch(addItem({ id, name, price, image }));
  };

  return (
    <div>
      <div className={style.item}>
        <img className={style.image} src={image} />
        <p>{name}</p>
        <p>{price} руб.</p>
        <div className={style.counter}>
          <p>{addedCount}</p>
          <button onClick={onClickAdd}>+</button>
        </div>
        <button
          onClick={() => {
            setIsShow(!isShow);
          }}>
          {isShow ? <p>Скрыть описание</p> : <p>Показать описание</p>}
        </button>
        {isShow && <p>Очень вкусный кекс</p>}
      </div>
    </div>
  );
};

export default ProductCard;
