import styles from "../styles/technology.module.scss";
import Header from "../components/header/Header";
import Wrapper from "../components/UI/Wrapper";
import Title from "../components/title/Title";
import VerticalSlider from "../components/verticalSlider/VerticalSlider";
import { Helmet } from "react-helmet";

const TechnologyPage = function (props) {
  return (
    <Wrapper className={`${styles.wrapper}`}>
      <Helmet>
        <title> Technology | Space Tourism </title>
      </Helmet>
      <Header path={props.path} />
      <Title title={{ index: 3, name: "SPACE LAUNCH 101" }} />
      <VerticalSlider data={props.data} />
    </Wrapper>
  );
};

export default TechnologyPage;
