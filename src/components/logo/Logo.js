import { ReactComponent as Path } from "../../assets/logo.svg";
import styles from "./Logo.module.scss";

const Logo = function () {
  return (
    <div className={styles.logo}>
      <a href='/' name='Logo' className={styles["logo__link"]}>
        <Path />
      </a>
    </div>
  );
};

export default Logo;
