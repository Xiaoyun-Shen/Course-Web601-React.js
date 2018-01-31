const NumberTypeLabel = (props) => {
  if(props.number % 2 === 0) {
    return (
      <div>
        {props.number} is an even number
      </div>
    );
  } else {
    return (
      <div>
        {props.number} is an odd number
      </div>
    );
  }
};

const renderConditionalRendering = () => {
  ReactDOM.render(
    // Try changing this value to an odd number!
    <NumberTypeLabel number={3}/>,
    document.getElementById("root")
  );
};

addLink(
  "Conditional Rendering",
  renderConditionalRendering
);
