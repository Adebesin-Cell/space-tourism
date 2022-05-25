import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Tab.module.scss";

const Tab = function ({ data }) {
  const { pathname } = useLocation();

  console.log(pathname);

  console.log(data);

  if (!data) {
    return (
      <p className='' style={{ color: "white" }}>
        Loading...
      </p>
    );
  }

  return (
    <React.Fragment>
      {data.map((item, index) => (
        <div
          data-content={item.name}
          key={index}
          className={`${styles.tab} ${styles[`tab--${index}`]}`}
        >
          <div className={styles["tab__image-box"]}>
            <img
              src={item.images.webp}
              alt={`${item.name} - ${item.description}`}
              className={styles.tab__image}
            />
          </div>
          <div className={styles.tab__content}>
            <div className={styles.switch}>
              <ul className={styles.switch__list}>
                {data.map((planet, i) => (
                  <li key={i} className={styles.switch__item}>
                    <Link
                      to={planet.url}
                      className={`${styles.switch__button} ${
                        styles[`switch__button--${index}`]
                      }`}
                    >
                      {planet.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.tab__details}>
              <h1 className={styles.tab__heading}>{item.name}</h1>
              <p className={styles.tab__paragraph}>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Tab;
