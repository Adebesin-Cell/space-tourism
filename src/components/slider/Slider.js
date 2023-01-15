import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from './Slider.module.scss';
import SliderDots from './SliderDots';

const Slider = function (props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      updateIndex(activeIndex + 1);
    },
    onSwipedRight: () => {
      updateIndex(activeIndex - 1);
    }
  });

  if (!props.data) {
    return <p style={{ color: 'white' }}>Loading...</p>;
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
              <SliderDots
                className={`${styles['slides__dots--2']} ${styles['slides__dots--tablet']}`}
                data={props.data}
                switchIndexHandler={switchIndexHandler}
                activeIndex={activeIndex}
              />
            </div>
            <div className={styles['slides__image-box']}>
              <img
                src={item.images.png}
                alt={item.name + ` - ${item.bio}`}
                className={styles.slides__image}
              />
            </div>
          </div>
        ))}
      </div>
      <SliderDots
        className={`${styles.slides__dots} ${styles['slides__dots--desktop']}`}
        data={props.data}
        switchIndexHandler={switchIndexHandler}
        activeIndex={activeIndex}
      />
    </div>
  );
};

export default Slider;
