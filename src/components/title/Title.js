import styles from "./Title.module.scss";
import variables from "../../styles/variables.module.scss";

const Title = function ({ title }) {
  return (
    <div className={`${styles.title} ${variables["content--space"]}`}>
      <h3 className={styles.title__heading}>
        <span className={styles["title__heading--light"]}>
          0{`${title.index}`}
        </span>
        <span className={styles["title__heading--bold"]}>{title.name}</span>
      </h3>
    </div>
  );
};

export default Title;
