import styles from "./Slider.module.scss";

const Slider = function (props) {
  if (!props.data) {
    return <p style={{ color: "white" }}>Loading...</p>;
  }

  //   console.log(Carousel);

  return (
    <div className={styles.slides}>
      <div className={styles.slides__item}>
        <div className={styles.slides__content}>&nbsp;</div>
        <div className={styles["slides__image-box"]}>
          <img
            src={props.data[3].images.png}
            alt={props.data[3].images.bio}
            className={styles.slides__image}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
