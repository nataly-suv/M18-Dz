import { FC } from "react";
import style from "./combination.module.css";
import { CombinationType } from "../../types/combination";

type Props = {
  data: CombinationType;
};

const Combination: FC<Props> = ({ data }) => {
  const tag = data.tag.join(" ");

  return (
    <div className={style.combination}>
      <h2 className={style.title}>{data.name}</h2>
      <p className={style.description}>{tag}</p>
    </div>
  );
};

export default Combination;
