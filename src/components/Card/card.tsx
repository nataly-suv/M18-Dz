import { FC } from "react";
import style from "./card.module.css";
import { Link } from "react-router-dom";
import { BeanType } from "../../types/bean";

type Props = {
  data: BeanType;
};

const Card: FC<Props> = ({ data }) => {
  return (
    <Link to={`/M18-Dz/bean/${data.beanId}`}
      className={style.card}
      style={{ backgroundColor: data.backgroundColor }}
    >
      <div className={style.img__box}>
        <img src={data.imageUrl} className={style.card__img} alt="foto" />
      </div>
      <h2 className={style.item__title}>{data.flavorName}</h2>
      <p className={style.item__description}>{data.description}</p>
      {/* {data.sugarFree === true ? <p>Not sugar</p> : <p>With surag</p>} */}
    </Link>
  );
};

export default Card;
