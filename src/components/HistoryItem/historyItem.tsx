import { FC } from "react";
import style from "./historyItem.module.css";
import { HistoryType } from "../../types/history";

type Props = {
  data: HistoryType;
};

const HistoryItem: FC<Props> = ({ data }) => {

  return (
    <div className={style.historyItem}>
      <h2 className={style.title}>{data.year}</h2>
      <p className={style.description}>{data.description}</p>
    </div>
  );
};

export default HistoryItem;
