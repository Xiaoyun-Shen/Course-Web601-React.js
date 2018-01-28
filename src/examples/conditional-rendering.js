const NumberTypeLabel = (props) => {
  var numberType;

  if(props.number === 0) {
    numberType = "even";
  } else {
    numberType = "odd";
  }

  return (
    <p>
      {props.number} is an {numberType} number.
    </p>
  );
};

const renderConditionalRendering = () => {
  ReactDOM.render(
    // Try changing this value to an odd number!
    <NumberTypeLabel number={8}/>,
    document.getElementById("root")
  );
};

addLink(
  "Conditional Rendering",
  renderConditionalRendering
);
