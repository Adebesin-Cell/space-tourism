import styles from "../styles/crew.module.scss";
import variables from "../styles/variables.module.scss";
import { Helmet } from "react-helmet";
import Header from "../components/header/Header";
import Wrapper from "../components/UI/Wrapper";
import Title from "../components/title/Title";
import Details from "../components/details/Details";
import Slider from "../components/slider/Slider";

const CrewPage = function (props) {
  return (
    <Wrapper className={`${styles.wrapper}`}>
      <Helmet>
        <title> Crew | Space Tourism </title>
      </Helmet>
      <Header path={props.path} />
      <Title title={{ index: 2, name: "Meet your crew" }} />
      <Details className={variables["content--space"]}>
        <Slider data={props.data} />
      </Details>
    </Wrapper>
  );
};

export default CrewPage;
