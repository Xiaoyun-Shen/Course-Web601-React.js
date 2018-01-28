/* Basic example demonstrating input - using stateful components */
class BasicInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      userInput: ''
    };
  }
  handleChange(e) {
    this.setState({userInput: e.target.value});
  }
  render() {
    return (
      <div>
          <p>
            Please enter some input
          </p>
          <input onChange={this.handleChange}/>
          <p>
            You entered: {this.state.userInput}
          </p>
      </div>
    ); 
  }
}

const renderBasicInput = () => {
  ReactDOM.render(
    <div>
      This is a simple example to demonstrate a reactive update.
      <BasicInput/>
    </div>,
    document.getElementById('root')
  );
};

addLink("Input", renderBasicInput);

