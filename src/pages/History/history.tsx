import { useEffect, useState } from "react";
import style from "./history.module.css";
import { HistoryType } from "../../types/history";
import HistoryItem from "../../components/HistoryItem/historyItem";

const History = () => {
  // состояния для фактов
  const [allHistory, setAllHistory] = useState<null | HistoryType[]>(null);

  // создаем 2 сосотяния: либо происходит загрузка, либо запрос не удачный
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const req = await fetch(
        "https://jellybellywikiapi.onrender.com/api/MileStones?pageSize=23"
      );
      const data = await req.json();
      setAllHistory(data.items);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };

  // [] - список зависимостей, когда нужно выполнять данный эффект. Пустой,чтобы не выполнялся бесконечный запрос
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={style.conteiner}>
      <h1 className={style.title}>History ...</h1>

      {isLoading && <p>...Loading</p>}
      {isError && <p>Error</p>}

      <div className={style.history}>
        {allHistory &&
          allHistory.map((item) => {
            return (
              <HistoryItem data={item} key={item.mileStoneId} />
            );
          })}
      </div>
    </div>
  );
};

export default History;
