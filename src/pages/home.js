import Header from "../components/header/Header";
import Content from "../components/content/Content";
import styles from "../styles/home.module.scss";
import Wrapper from "../components/UI/Wrapper";
import { Helmet } from "react-helmet";

const HomePage = function (props) {
  return (
    <Wrapper className={`${styles.wrapper}`}>
      <Helmet>
        <title> Space Tourism </title>
      </Helmet>
      <Header path={props.path} />
      <Content />
    </Wrapper>
  );
};

export default HomePage;
