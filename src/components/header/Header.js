import { Fragment, useState } from "react";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import Menu from "../menu/Menu";
import styles from "./Header.module.scss";

const Header = function (props) {
  const [isClosed, setIsClosed] = useState(true);

  const toggleMenuHandler = function (e) {
    setIsClosed(!isClosed);
  };

  const setIsClosedHandler = function (e) {
    setIsClosed(true);
  };

  return (
    <Fragment>
      <div className={styles.header}>
        <Logo />
        <div className={styles["header__line"]}>&nbsp;</div>
        <Navigation path={props.path} />
        <button
          onClick={toggleMenuHandler}
          className={`${styles.menu__open} ${
            isClosed ? "" : `${styles["menu__open--opened"]}`
          }`}
        >
          <span
            className={`${styles["menu__open--line"]} ${styles["menu__open--line--1"]}`}
          ></span>
          <span
            className={`${styles["menu__open--line"]} ${styles["menu__open--line--2"]}`}
          ></span>
          <span
            className={`${styles["menu__open--line"]} ${styles["menu__open--line--3"]}`}
          ></span>
        </button>
      </div>
      {!isClosed && <Menu path={props.path} close={setIsClosedHandler} />}
    </Fragment>
  );
};

export default Header;
