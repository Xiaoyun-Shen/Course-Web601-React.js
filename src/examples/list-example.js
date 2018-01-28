/* Basic example demonstrating input - using stateful components */

/* This is a pure component with some props, see: 
 * https://reactjs.org/docs/components-and-props.html */

const ListItem = (props) => (
  <li>You passed: {props.value} as a prop!</li>
);

class ListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [1, 2, 3, 4, 5]
    };
  }
  handleChange(e) {
    this.setState(
      {
        userInput: e.target.value
      }
    );
  }
  render() {
    this.handleChange = this.handleChange.bind(this);
    /* We use 'map' to transform the values inside of an array see:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
     *
     * Don't forget to set your key to uniquely identify child components, see:
     * https://reactjs.org/docs/lists-and-keys.html
    * */
    const renderedItems = this.state.list.map(x => (
      <ListItem key={x.toString()} value={x}/>
    ));

    return (
      <ul>
        {renderedItems}
      </ul>
    );
  }
}

const renderList = () => {
  ReactDOM.render(
    <div>
      This is a simple example demonstrating lists & props.
      <ListComponent/>
    </div>,
    document.getElementById('root')
  );
};

addLink("Lists", renderList);


