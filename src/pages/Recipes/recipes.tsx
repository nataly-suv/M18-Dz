import { useEffect, useState } from "react";
import Recipe from "../../components/Recipe/recipe";
import style from "./recipes.module.css";
import { RecipeType } from "../../types/recipe";

const Recipes = () => {
  // состояния для рецептов
  const [allRecipes, setAllRecipes] = useState<null | RecipeType[]>(null);

  // создаем 2 сосотяния: либо происходит загрузка, либо запрос не удачный
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  //   функция получения данных
  const getData = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const req = await fetch(
        "https://jellybellywikiapi.onrender.com/api/Recipes?pageSize=27"
      );
      const data = await req.json();
      setAllRecipes(data.items);

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
    <div className={style.recipes__conteiner}>
      <h1 className={style.title}>Recipes ...</h1>

      {isLoading && <p>...Loading</p>}
      {isError && <p>Error</p>}

      <div className={style.recipes}>
        {allRecipes &&
          allRecipes.map((recipe) => {
            return <Recipe data={recipe} key={recipe.recipeId} />;
          })}
      </div>
    </div>
  );
};

export default Recipes;
