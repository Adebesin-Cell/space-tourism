import styles from "../styles/crew.module.scss";
import Header from "../components/header/Header";
import Wrapper from "../components/UI/Wrapper";

const CrewPage = function (props) {
  return (
    <Wrapper className={`${styles.wrapper}`}>
      <Header path={props.path} />
    </Wrapper>
  );
};

export default CrewPage;
