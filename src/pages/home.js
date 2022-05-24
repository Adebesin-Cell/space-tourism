import Header from "../components/header/Header";
import Content from "../components/content/Content";
import styles from "../styles/home.module.scss";
import variables from "../styles/variables.module.scss";

const HomePage = function (props) {
  return (
    <div className={`${styles.wrapper} ${variables["container--space"]}`}>
      <Header path={props.path} />
      <Content />
    </div>
  );
};

export default HomePage;
