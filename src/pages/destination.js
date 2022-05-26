import styles from "../styles/destination.module.scss";
import Header from "../components/header/Header";
import Title from "../components/title/Title";
import Wrapper from "../components/UI/Wrapper";
import Details from "../components/details/Details";
import Destination from "../components/destination/Destination";
import Tab from "../components/tab/Tab";
import variables from "../styles/variables.module.scss";

const DestinationPage = function (props) {
  return (
    <Wrapper className={`${styles.wrapper}`}>
      <Header path={props.path} />
      <Title title={{ index: 1, name: "Pick your destination" }} />
      <Destination>
        <Details className={variables["content--space"]}>
          <Tab path={props.path} data={props.data}></Tab>
        </Details>
      </Destination>
    </Wrapper>
  );
};

export default DestinationPage;
