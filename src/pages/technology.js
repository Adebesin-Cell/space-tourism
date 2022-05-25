import styles from "../styles/technology.module.scss";
import Header from "../components/header/Header";
import Wrapper from "../components/UI/Wrapper";

const TechnologyPage = function (props) {
  return (
    <Wrapper className={`${styles.wrapper}`}>
      <Header path={props.path} />
    </Wrapper>
  );
};

export default TechnologyPage;
