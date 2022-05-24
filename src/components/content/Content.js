import styles from "./Content.module.scss";
import variables from "../../styles/variables.module.scss";

const Content = function () {
  return (
    <section className={styles.content}>
      <div
        className={`${styles.content__wrapper} ${variables["content--space"]}`}
      >
        <h3
          className={`${styles["content__heading"]} ${styles["content__heading--tertiary"]}`}
        >
          SO, YOU WANT TO TRAVEL TO
        </h3>
      </div>
    </section>
  );
};

export default Content;
