import { Link } from "react-router-dom";
import styles from "./Content.module.scss";
import variables from "../../styles/variables.module.scss";

const Content = function () {
  return (
    <section className={styles.content}>
      <div
        className={`${styles.content__wrapper} ${variables["content--space"]}`}
      >
        <div className={styles.content__box}>
          <h3
            className={`${styles["content__heading"]} ${styles["content__heading--tertiary"]}`}
          >
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1
            className={`${styles["content__heading"]} ${styles["content__heading--primary"]}`}
          >
            SPACE
          </h1>

          <p className={styles.content__paragraph}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={styles["content__image-box"]}>
          <Link
            to='/destination'
            name='Explore'
            className={styles.content__link}
          >
            <span className={styles["content__link--text"]}>Explore</span>
            <span className={styles["content__link--overlay"]}>&nbsp;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Content;
