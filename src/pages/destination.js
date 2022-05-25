import styles from "../styles/destination.module.scss";
import variables from "../styles/variables.module.scss";
import Header from "../components/header/Header";
import Title from "../components/title/Title";

const DestinationPage = function (props) {
  console.log(props.data);
  return (
    <div className={`${styles.wrapper} ${variables["container--space"]}`}>
      <Header path={props.path} />
      <Title title={{ index: 1, name: "Pick your destination" }} />
    </div>
  );
};

export default DestinationPage;
