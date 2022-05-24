import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import styles from "./Header.module.scss";

const Header = function (props) {
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles["header__line"]}>&nbsp;</div>
      <Navigation path={props.path} />
    </div>
  );
};

export default Header;
