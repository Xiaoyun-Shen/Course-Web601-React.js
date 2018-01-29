const FunctionalComponent = (props) => (
  //Functional components only have props - no state!
  <div>
    "Stateless" Pure Functional Component
      <ul>
        <li>props.x = {props.x}</li>
        <li>props.y = {props.y}</li>
      </ul>
  </div>
);

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    // Class components can have both props and state!
    this.state = {
      z: "is a restaurant"
    }
  }
  render() {
    return (
      <div>
        "Stateful" Class Component
        <ul>
          <li>props.x = {this.props.x}</li>
          <li>props.y = {this.props.y}</li>
          <li>state.z = {this.state.z}</li>
        </ul>
      </div>
    );
  }
}

const renderProps = () => {
  ReactDOM.render(
    <div>
      <p>
        This is a code sample demonstrating how to pass props to react components.
      </p>
      <div>
        <FunctionalComponent
          x="pizza"
          y="hut"/>
        <ClassComponent
          x="taco"
          y="bell"
          />
      </div>
    </div>,
    document.getElementById('root')
  );
};

links.push({
  label: "Props",
  clickHandler: renderProps
});
