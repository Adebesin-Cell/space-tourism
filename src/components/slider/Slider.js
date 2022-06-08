import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./Slider.module.scss";

const Slider = function (props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      updateIndex(activeIndex + 1);
    },
    onSwipedRight: () => {
      updateIndex(activeIndex - 1);
    },
  });

  if (!props.data) {
    return <p style={{ color: "white" }}>Loading...</p>;
  }

  const switchIndexHandler = function (e) {
    const { index } = e.target.dataset;
    setActiveIndex(+index);
  };

  function updateIndex(newIndex) {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= props.data.length) {
      newIndex = props.data.length - 1;
    }

    setActiveIndex(newIndex);
  }

  return (
    <div className={`${styles.slides}`} {...handlers}>
      <div
        className={styles.slides__inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {props.data.map((item, i) => (
          <div key={i} className={styles.slides__item}>
            <div className={styles.slides__content}>
              <h3 className={styles.slides__title}>{item.role}</h3>
              <h1 className={styles.slides__heading}>{item.name}</h1>
              <p className={styles.slides__paragraph}>{item.bio}</p>
            </div>
            <div className={styles["slides__image-box"]}>
              <img
                src={item.images.png}
                alt={item.name + ` - ${item.bio}`}
                className={styles.slides__image}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.slides__dots}>
        {props.data.map((_, i) => (
          <button
            key={i}
            data-index={i}
            className={`${styles.slides__dot} ${
              activeIndex === i ? styles["slides__dot--active"] : ""
            }`}
            onClick={switchIndexHandler}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
