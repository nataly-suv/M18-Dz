import style from "./cards.module.css";
import Card from "../Card/card";
import { useEffect, useState } from "react";
import { BeanType } from "../../types/bean";

const Cards = () => {
  // для отрисовки данных на странице. setallBeans - функция изменения состояния
  // null - т.к. изначально данных нет
  const [allBeans, setAllBeans] = useState<null | BeanType []>(null);

  // создаем 2 сосотяния: либо происходит загрузка, либо запрос не удачный
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // состояние для фильтрации
  // const [updateBeans, setUpdateBeans] = useState<null | Bean[]>(null);

  // функция получения данных
  const getData = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const red = await fetch(
        "https://jellybellywikiapi.onrender.com/api/Beans?pageSize=114"
      );
      const data = await red.json();
      setIsLoading(false);
      // после ткак пришли данные, перезаписывает состояние
      setAllBeans(data.items);
      // обновляем состояние дял фильтрации
      // setUpdateBeans(data.items);
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
      <div className={style.container}>
        {isLoading && <p>...Loading</p>}
        {isError && <p>Error</p>}
        {/* если allBeans существует, тогда выполнять map */}
        {allBeans &&
          allBeans.map((bean) => {
            return <Card data={bean} key={bean.beanId} />;
          })}
      </div>
  );
};

export default Cards;
