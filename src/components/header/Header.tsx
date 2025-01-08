import { Link } from "react-router-dom";
import style from "./style.module.css";
import logo_img from "../../images/logo-header.png";

const Header = () => {
  return (
    <header className={style.header}>
      <Link to="/" className={style.logo}>
        <img className={style.logo__img} src={logo_img} alt="logo" />
        <p className={style.logo__text}>Jelly Belly</p>
      </Link>
      <nav className={style.nav}>
        <Link to="/beans" className={style.nav__text}>Beans</Link>
        <Link to="/facts" className={style.nav__text}>Facts</Link>
        <Link to="/recipes" className={style.nav__text}>Recipes</Link>
        <Link to="/combinations" className={style.nav__text}>Combinations</Link>
        <Link to="/history" className={style.nav__text}>History</Link>
      </nav>
    </header>
  );
};

export default Header;
