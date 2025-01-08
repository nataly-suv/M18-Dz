import { FC } from "react";
import { RecipeType } from "../../types/recipe";
import style from "./recipe.module.css";

type Props = {
  data: RecipeType;
};

const Recipe: FC<Props> = ({ data }) => {

const description = data.description.split(' ').slice(0, 15).join(' ');
  return (
    <div className={style.recipe}>
      <div className={style.img__box}>
        <img src={data.imageUrl} className={style.img} alt="imageUrl" />
      </div>
      <div className={style.descriptions}>
          <h2 className={style.title}>{data.name}</h2>
          <p className={style.description}>{description}</p>
          <p className={style.data}>{data.makingAmount}</p>
          <p className={style.data}>{data.cookTime}</p>
          <p className={style.data}>{data.totalTime}</p>
      </div>
    </div>
  );
};

export default Recipe;
