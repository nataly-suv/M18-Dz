import home_img from "../../images/home_img.gif";
import style from "./style.module.css";

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.conteiner}>
        <img className={style.img} src={home_img} alt="home_img" />
        <div className={style.text}>
          <h2 className={style.text__title}>
            Welcome to the World of Jelly Belly:
          </h2>
          <p className={style.text__text}>A Rainbow of Flavors Awaits!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
