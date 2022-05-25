import styles from "./Destination.module.scss";

const Destination = function (props) {
  return <section className={styles.destination}>{props.children}</section>;
};

export default Destination;
