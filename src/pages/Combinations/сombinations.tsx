import { useEffect, useState } from "react";
import style from "./combinations.module.css";
import { CombinationType } from "../../types/combination";
import Combination from "../../components/Combination/сombination";

const Combinations = () => {
  // состояния для фактов
  const [allСombinations, setAllСombinations] = useState<null | CombinationType[]>(null);

  // создаем 2 сосотяния: либо происходит загрузка, либо запрос не удачный
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const req = await fetch(
        "https://jellybellywikiapi.onrender.com/api/Combinations?pageSize=54"
      );
      const data = await req.json();
      setAllСombinations(data.items);

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
      <h1 className={style.title}>Explore Combinations ...</h1>

      {isLoading && <p>...Loading</p>}
      {isError && <p>Error</p>}

      <div className={style.combinations}>
        {allСombinations &&
          allСombinations.map((combination) => {
            return (
              <Combination data={combination} key={combination.combinationId} />
            );
          })}
      </div>
    </div>
  );
};

export default Combinations;
