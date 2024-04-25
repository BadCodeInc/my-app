import React, { useState } from 'react';
import style from './ProductCard.module.css';

const ProductCard = ({ name, price, image }) => {
  const [value, setValue] = useState(0);
  const [isShow, setIsShow] = useState(false);

  const onClickAdd = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <div className={style.item}>
        <img className={style.image} src={image} />
        <p>{name}</p>
        <p>{price} руб.</p>
        <div className={style.counter}>
          <p>{value}</p>
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
