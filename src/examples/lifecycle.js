// See the full list of lifecycle methods available
// at: https://reactjs.org/docs/react-component.html#the-component-lifecycle
class LifecycleExample extends React.Component {
  constructor(props) {
    super(props);

    this.getNextCount = this.getNextCount.bind(this);
    this.state = {
      count: 0
    }
  }
  getNextCount() {
    const newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });

    return newCount;
  }
  componentWillMount() {
    console.log(
      "I'm about to be born! count: " +
      this.getNextCount()
    );
  }
  componentDidMount() {
    console.log(
      "I am born! count: " +
      this.getNextCount()
    );
  }
  componentDidUpdate() {
    console.log(
      "I have a whole new outlook on life!! count: " +
      this.state.count
    );
  }
  render() {
    return (
      <div>
        <p>
          I am alive!! Count: {this.state.count}
        </p>
        <button onClick={this.getNextCount}>
          Click to update me
        </button>
      </div>
    );
  }
}

const renderComponentLifecycle = () => {
  ReactDOM.render(
    <div>
      <LifecycleExample/>
    </div>,
    document.getElementById('root')
  );
}

addLink(
  "Component Lifecycle API",
  renderComponentLifecycle
);
