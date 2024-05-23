import React from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  React.useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(items));
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
    console.log('LS изменен');
  }, [items]);

  return (
    <div className={style.item}>
      <div>
        <Link to="/forms">Формы</Link>
      </div>
      <div>
        <Link to="/">Главная</Link>
      </div>
      <div>
        <Link to="/cart">Корзина</Link>
        <div>
          <p>
            Добавлено <span>{totalCount}</span>{' '}
          </p>
          <p>
            На сумму <span>{totalPrice}</span> руб.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
