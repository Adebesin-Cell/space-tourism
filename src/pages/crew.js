import styles from "../styles/crew.module.scss";
import variables from "../styles/variables.module.scss";
import Header from "../components/header/Header";

const CrewPage = function (props) {
  return (
    <div className={`${styles.wrapper} ${variables["container--space"]}`}>
      <Header path={props.path} />
    </div>
  );
};

export default CrewPage;
