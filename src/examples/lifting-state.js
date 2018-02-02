//We pass in 'lifted state' through props
//Here the state is passed through 'props.name'
const HelloLabel = (props) => {
  var greeting = "Hello " + props.name + "!";

  return (
    <p>
      {greeting}
    </p>
  );
};

//We pass in functions to lift state up to the
//parent component. Here we pass 'onInput' to handle
//state changes when the user types something.
const HelloInput = (props) => (
  <div>
    <p>
      Please enter your name
    </p>
    <input onChange={props.onInput}/>
  </div>
);

//The parent component owns state and passes it
//down to child components through props
//ex: this.state.name
//
//The parent component passes down functions to
//handle state changes on UI events
//ex: this.onInput

class HelloForm extends React.Component {
  constructor(props) {
    super(props);

    this.onInput = this.onInput.bind(this);
    this.state = {
      name: "World"
    };
  }
  onInput(event) {
    const nameEntered = event.target.value;
    this.setState({
      name: nameEntered
    });
  }
  render() {
    return (
      <div>
        <HelloInput
          onInput={this.onInput}/>
        <HelloLabel
          name={this.state.name}/>
      </div>
    );
  }
}

const renderLiftingState = () => {
  ReactDOM.render(
    <HelloForm/>,
    document.getElementById("root")
  );
};

addLink(
  "Lifting State",
  renderLiftingState
);
