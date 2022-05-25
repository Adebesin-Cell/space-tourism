import Header from "../components/header/Header";
import Content from "../components/content/Content";
import styles from "../styles/home.module.scss";
import Wrapper from "../components/UI/Wrapper";

const HomePage = function (props) {
  return (
    <Wrapper className={`${styles.wrapper}`}>
      <Header path={props.path} />
      <Content />
    </Wrapper>
  );
};

export default HomePage;
