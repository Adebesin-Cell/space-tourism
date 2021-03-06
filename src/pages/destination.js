import styles from "../styles/destination.module.scss";
import Header from "../components/header/Header";
import Title from "../components/title/Title";
import Wrapper from "../components/UI/Wrapper";
import Details from "../components/details/Details";
import Destination from "../components/destination/Destination";
import Tab from "../components/tab/Tab";
import { Helmet } from "react-helmet";
import variables from "../styles/variables.module.scss";

const DestinationPage = function (props) {
  return (
    <Wrapper className={`${styles.wrapper}`}>
      <Helmet>
        <title> Destination | Space Tourism </title>
      </Helmet>
      <Header path={props.path} />
      <Title title={{ index: 1, name: "Pick your destination" }} />
      <Destination>
        <Details className={variables["content--space"]}>
          <Tab path={props.path} data={props.data} />
        </Details>
      </Destination>
    </Wrapper>
  );
};

export default DestinationPage;
