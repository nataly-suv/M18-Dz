import { Link } from "react-router-dom";
import style from "./style.module.css";
import logo_img from "../../images/logo-header.png";
import burger from "../../images/logo-headerMobile.png";
import close from "../../images/close.png";
import { useState } from "react";

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState("none");
  // функция, нажатия на кнопку
  const handleClick = () => {
    if (isOpen === "none") {
      setIsOpen("block");
    } else {
      setIsOpen("none");
    }
  };
  return (
    <header className={style.headerMobile}>
      {/* лого и бургер меню */}
      <div className={style.menu}>
        <Link to="/M18-Dz" className={style.logo}>
          <img className={style.logo__img} src={logo_img} alt="logo" />
          <p className={style.logo__text}>Jelly Belly</p>
        </Link>
        <img
          className={style.burger}
          src={burger}
          onClick={handleClick}
          alt="burger"
        />
      </div>

      {/* навигация */}
      <div className={style.navMobile__box} style={{ display: `${isOpen}` }}>
        <img
          className={style.close}
          src={close}
          onClick={handleClick}
          alt="close"
        />
        <nav className={style.navMobile}>
          <Link to="/M18-Dz/beans" onClick={handleClick} className={style.nav__text}>
            Beans
          </Link>
          <Link to="/M18-Dz/facts" onClick={handleClick} className={style.nav__text}>
            Facts
          </Link>
          <Link to="/M18-Dz/recipes" onClick={handleClick} className={style.nav__text}>
            Recipes
          </Link>
          <Link
            to="/M18-Dz/combinations"
            onClick={handleClick}
            className={style.nav__text}
          >
            Combinations
          </Link>
          <Link to="/M18-Dz/history" onClick={handleClick} className={style.nav__text}>
            History
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default HeaderMobile;
