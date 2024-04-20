import React, { useState } from 'react';
const ProductCard = ({ name, price }) => {
  const [value, setValue] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const onClickAdd = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <div className="item">
        <img
          className="image"
          src="http://klublady.ru/uploads/posts/2022-02/1645039693_5-klublady-ru-p-pirozhnoe-s-malinoi-foto-5.jpg"
        />
        <p>{name}</p>
        <p>{price} руб.</p>
        <div className="counter">
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
