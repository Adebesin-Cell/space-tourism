import styles from './Slider.module.scss';

const SliderDots = function (props) {
  return (
    <div className={props.className}>
      {props.data.map((_, i) => (
        <button
          key={i}
          data-index={i}
          className={`${styles.slides__dot} ${
            props.activeIndex === i ? styles['slides__dot--active'] : ''
          }`}
          onClick={props.switchIndexHandler}
        ></button>
      ))}
    </div>
  );
};

export default SliderDots;
