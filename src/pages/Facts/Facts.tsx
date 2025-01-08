import { useEffect, useState } from "react";

import { FactType } from "../../types/fact";
import style from "./facts.module.css";
import Fact from "../../components/Fact/Fact";

const Facts = () => {
  // состояния для фактов
  const [allFacts, setAllFacts] = useState<null | FactType[]>(null);

  // создаем 2 сосотяния: либо происходит загрузка, либо запрос не удачный
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const req = await fetch(
        "https://jellybellywikiapi.onrender.com/api/Facts?pageSize=99"
      );
      const data = await req.json();
      setAllFacts(data.items);

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
    <div className={style.facts__conteiner}>
      <h1 className={style.facts__title}>Facts ...</h1>

      {isLoading && <p>...Loading</p>}
      {isError && <p>Error</p>}

      <div className={style.facts}>
        {allFacts &&
          allFacts.map((fact) => {
            return <Fact data={fact} key={fact.factId} />;
          })}
      </div>
    </div>
  );
};

export default Facts;
