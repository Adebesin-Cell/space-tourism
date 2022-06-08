import styles from "../styles/technology.module.scss";
import Header from "../components/header/Header";
import Wrapper from "../components/UI/Wrapper";
import Title from "../components/title/Title";

const TechnologyPage = function (props) {
  return (
    <Wrapper className={`${styles.wrapper}`}>
      <Header path={props.path} />
      <Title title={{ index: 3, name: "SPACE LAUNCH 101" }} />
    </Wrapper>
  );
};

export default TechnologyPage;
