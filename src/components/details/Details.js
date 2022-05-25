import styles from "./Details.module.scss";

const Details = function (props) {
  return (
    <div
      className={`${styles.details} ${props.className ? props.className : ""}`}
    >
      {props.children}
    </div>
  );
};

export default Details;
