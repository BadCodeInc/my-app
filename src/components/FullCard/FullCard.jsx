import React from 'react';
import style from './FullCard.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const FullCard = () => {
  const { id } = useParams();
  const [item, setItem] = React.useState();

  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchItems() {
      try {
        const res = await axios.get('https://662a6f3467df268010a3eb19.mockapi.io/items/' + id);
        setItem(res.data);
      } catch (err) {
        console.log(err);
        navigate('/');
      }
    }
    fetchItems();
  }, []);

  console.log(item);

  if (!item) {
    return 'Загрузка...';
  }

  return (
    <div>
      <img src={item?.image} className={style.image} />
      <p>{item?.name}</p>
      <p>{item?.price}</p>
    </div>
  );
};

export default FullCard;
