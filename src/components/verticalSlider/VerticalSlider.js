import styles from './VerticalSlider.module.scss';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const VerticalSlider = function (props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      updateIndex(activeIndex + 1);
    },
    onSwipedRight: () => {
      updateIndex(activeIndex - 1);
    },
    onSwipedUp: () => {
      updateIndex(activeIndex + 1);
    },
    onSwipedDown: () => {
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
    <>
      <section className={styles.container}>
        <div className={styles.slider} {...handlers}>
          <div className={styles.slider__buttonContainer}>
            <div className={styles.slider__buttonWrapper}>
              {props.data.map((_, i) => (
                <button
                  key={i}
                  data-index={i}
                  className={`${styles.slider__button} ${
                    activeIndex === i ? styles['slider__button--active'] : ''
                  }`}
                  onClick={switchIndexHandler}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.slider__wrap}>
            <div
              className={styles.slider__inner}
              style={{ transform: `translateY(-${activeIndex * 100}%)` }}
            >
              {props.data.map((item, i) => (
                <div key={i} className={styles.slider__item}>
                  <div className={styles.slider__content}>
                    <div className={styles.slider__details}>
                      <h3 className={styles.slider__title}>THE TERMINOLOGY…</h3>
                      <h1 className={styles.slider__heading}>{item.name}</h1>
                      <p className={styles.slider__paragraph}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className={styles['slider__image--box']}>
                    <img
                      src={item.images.portrait}
                      alt={item.nam}
                      className={styles.slider__image}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.vertical}>
        <div className={styles.slider__wrap}>
          <div
            className={styles.slider__inner}
            style={{ transform: `translateY(-${activeIndex * 100}%)` }}
          >
            {props.data.map((item, i) => (
              <div key={i} className={styles.slider__item}>
                <div className={styles['slider__image--box']}>
                  <img
                    src={item.images.landscape}
                    alt={item.nam}
                    className={styles.slider__image}
                  />
                </div>
                <div className={styles.slider__content}>
                  <div className={styles.slider__details}>
                    <h3 className={styles.slider__title}>THE TERMINOLOGY…</h3>
                    <h1 className={styles.slider__heading}>{item.name}</h1>
                    <p className={styles.slider__paragraph}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VerticalSlider;
