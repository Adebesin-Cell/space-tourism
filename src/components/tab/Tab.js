import { Fragment, useState } from "react";
import styles from "./Tab.module.scss";

const Tab = function ({ data }) {
  const [activeTab, setActiveTab] = useState(1);

  let content;

  if (!data) {
    return (
      <p className='' style={{ color: "white" }}>
        Loading...
      </p>
    );
  }

  const tabSwitchHandler = function (e) {
    const { index } = e.target.dataset;

    setActiveTab(+index);
  };

  if (activeTab === 1) {
    content = (
      <div data-planet={data[0].name.toLowerCase()} className={`${styles.tab}`}>
        <div className={styles["tab__image-box"]}>
          <img
            src={data[0].images.png}
            alt={data[0].description}
            className={styles.tab__image}
          />
        </div>
        <div className={styles.tab__content}>
          <div className={styles.switch}>
            <ul className={styles.switch__list}>
              <li className={styles.switch__item}>
                <button
                  data-index='1'
                  data-planet={data[1].name.toLowerCase()}
                  className={`${styles.switch__button} ${styles["switch__button--active"]}`}
                  onClick={tabSwitchHandler}
                >
                  Moon
                </button>
              </li>
              <li className={styles.switch__item}>
                <button
                  data-index='2'
                  data-planet={data[1].name.toLowerCase()}
                  className={`${styles.switch__button}`}
                  onClick={tabSwitchHandler}
                >
                  Mars
                </button>
              </li>
              <li className={styles.switch__item}>
                <button
                  data-index='3'
                  data-planet={data[2].name.toLowerCase()}
                  className={`${styles.switch__button}`}
                  onClick={tabSwitchHandler}
                >
                  Europa
                </button>
              </li>
              <li className={styles.switch__item}>
                <button
                  data-index='4'
                  data-planet={data[3].name.toLowerCase()}
                  className={`${styles.switch__button}`}
                  onClick={tabSwitchHandler}
                >
                  Titan
                </button>
              </li>
            </ul>
          </div>
          <div className={styles.tab__details}>
            <h1 className={styles.tab__heading}>{data[0].name}</h1>
            <p className={styles.tab__paragraph}>{data[0].description}</p>
          </div>
        </div>
      </div>
    );
  } else if (activeTab === 2) {
    content = (
      <div data-planet={data[1].name.toLowerCase()} className={`${styles.tab}`}>
        <div className={styles["tab__image-box"]}>
          <img
            src={data[1].images.png}
            alt={data[1].description}
            className={styles.tab__image}
          />
        </div>
        <div className={styles.tab__content}>
          <div className={styles.switch}>
            <ul className={styles.switch__list}>
              <li className={styles.switch__item}>
                <button
                  data-index='1'
                  data-planet={data[0].name.toLowerCase()}
                  className={`${styles.switch__button}`}
                  onClick={tabSwitchHandler}
                >
                  Moon
                </button>
              </li>
              <li className={styles.switch__item}>
                <button
                  data-index='2'
                  data-planet={data[1].name.toLowerCase()}
                  className={`${styles.switch__button} ${styles["switch__button--active"]}`}
                  onClick={tabSwitchHandler}
                >
                  Mars
                </button>
              </li>
              <li className={styles.switch__item}>
                <button
                  data-index='3'
                  data-planet={data[2].name.toLowerCase()}
                  className={`${styles.switch__button}`}
                  onClick={tabSwitchHandler}
                >
                  Europa
                </button>
              </li>
              <li className={styles.switch__item}>
                <button
                  data-index='4'
                  data-planet={data[3].name.toLowerCase()}
                  className={`${styles.switch__button}`}
                  onClick={tabSwitchHandler}
                >
                  Titan
                </button>
              </li>
            </ul>
          </div>
          <div className={styles.tab__details}>
            <h1 className={styles.tab__heading}>{data[1].name}</h1>
            <p className={styles.tab__paragraph}>{data[1].description}</p>
          </div>
        </div>
      </div>
    );
  } else if (activeTab === 3) {
    content = (
      <div data-planet={data[2].name.toLowerCase()} className={`${styles.tab}`}>
        <div className={styles["tab__image-box"]}>
          <img
            src={data[2].images.png}
            alt={data[2].description}
            className={styles.tab__image}
          />
        </div>
        <div className={styles.tab__content}>
          <div className={styles.switch}>
            <ul className={styles.switch__list}>
              <li className={styles.switch__item}>
                <button
                  data-index='1'
                  data-planet={data[0].name.toLowerCase()}
                  className={`${styles.switch__button}`}
                  onClick={tabSwitchHandler}
                >
                  Moon
                </button>
              </li>
              <li className={styles.switch__item}>
                <button
                  data-index='2'
                  data-planet={data[1].name.toLowerCase()}
                  className={`${styles.switch__button} `}
                  onClick={tabSwitchHandler}
                >
                  Mars
                </button>
              </li>
              <li className={styles.switch__item}>
                <button
                  data-index='3'
                  data-planet={data[2].name.toLowerCase()}
                  className={`${styles.switch__button} ${styles["switch__button--active"]}`}
                  onClick={tabSwitchHandler}
                >
                  Europa
                </button>
              </li>
              <li className={styles.switch__item}>
                <button
                  data-index='4'
                  data-planet={data[3].name.toLowerCase()}
                  className={`${styles.switch__button}`}
                  onClick={tabSwitchHandler}
                >
                  Titan
                </button>
              </li>
            </ul>
          </div>
          <div className={styles.tab__details}>
            <h1 className={styles.tab__heading}>{data[2].name}</h1>
            <p className={styles.tab__paragraph}>{data[2].description}</p>
          </div>
        </div>
      </div>
    );
  } else if (activeTab === 4) {
    content = (
      <div data-planet={data[3].name.toLowerCase()} className={`${styles.tab}`}>
        <div className={styles["tab__image-box"]}>
          <img
            src={data[3].images.png}
            alt={data[3].description}
            className={styles.tab__image}
          />
        </div>
        <div className={styles.tab__content}>
          <div className={styles.switch}>
            <ul className={styles.switch__list}>
              <li className={styles.switch__item}>
                <button
                  data-index='1'
                  data-planet={data[0].name.toLowerCase()}
                  className={`${styles.switch__button}`}
                  onClick={tabSwitchHandler}
                >
                  Moon
                </button>
              </li>
              <li className={styles.switch__item}>
                <button
                  data-index='2'
                  data-planet={data[1].name.toLowerCase()}
                  className={`${styles.switch__button}`}
                  onClick={tabSwitchHandler}
                >
                  Mars
                </button>
              </li>
              <li className={styles.switch__item}>
                <button
                  data-index='3'
                  data-planet={data[2].name.toLowerCase()}
                  className={`${styles.switch__button}`}
                  onClick={tabSwitchHandler}
                >
                  Europa
                </button>
              </li>
              <li className={styles.switch__item}>
                <button
                  data-index='4'
                  data-planet={data[3].name.toLowerCase()}
                  className={`${styles.switch__button} ${styles["switch__button--active"]}`}
                  onClick={tabSwitchHandler}
                >
                  Titan
                </button>
              </li>
            </ul>
          </div>
          <div className={styles.tab__details}>
            <h1 className={styles.tab__heading}>{data[3].name}</h1>
            <p className={styles.tab__paragraph}>{data[3].description}</p>
          </div>
        </div>
      </div>
    );
  }

  return <Fragment>{content}</Fragment>;
};

export default Tab;
