import variables from "../../styles/variables.module.scss";

const Wrapper = function (props) {
  return (
    <div className={`${props.className} ${variables["container--space"]}`}>
      {props.children}
    </div>
  );
};

export default Wrapper;
