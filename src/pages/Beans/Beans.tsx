import Cards from "../../components/Cards/cards";
import style from "./style.module.css";

const Beans = () => {
  return (
    <div className={style.beans}>
      <h1 className={style.beans__title}>Explore All Beans ...</h1>
      <Cards />
    </div>
  );
};

export default Beans;
