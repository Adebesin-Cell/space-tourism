import { ReactComponent as Path } from "../../assets/images/logo.svg";
import styles from "./Logo.module.scss";

const Logo = function () {
  return (
    <div className={styles.logo}>
      <a href='/' className={styles["logo__link"]}>
        <Path />
      </a>
    </div>
  );
};

export default Logo;
