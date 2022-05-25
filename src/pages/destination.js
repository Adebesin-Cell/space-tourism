import styles from "../styles/destination.module.scss";
import variables from "../styles/variables.module.scss";
import Header from "../components/header/Header";

const DestinationPage = function (props) {
  console.log(props.data);
  return (
    <div className={`${styles.wrapper} ${variables["container--space"]}`}>
      <Header path={props.path} />
    </div>
  );
};

export default DestinationPage;
