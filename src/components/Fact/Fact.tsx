import { FC } from "react";
import { FactType } from "../../types/fact";
import style from "./fact.module.css";

type Props = {
  data: FactType;
};

const Fact: FC<Props> = ({ data }) => {
  return (
    <div className={style.fact}>
      <h2 className={style.title}>{data.title}</h2>
      <p className={style.description}>{data.description}</p>
    </div>
  );
};

export default Fact;
