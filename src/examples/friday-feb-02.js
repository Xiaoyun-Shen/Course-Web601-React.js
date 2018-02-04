console.log("I loaded right?");
/*
 * Step 1: Component
 *
 *
 */

var theConstructorScope;
var theObjectScope;

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    console.log("I actually ran - constructor");

    this.state = {
      someState: "kitties are cute",
      counter: 0
    };
    theConstructorScope = this;

    // Example of constructor time binding
    this.count1 = this.count2.bind(this);
  }
  count2() {
    console.log("I actually ran - count method");
    console.log("are there kitties? " + this.state.someState);

    //Update some state with a prop
    //We'll count up by this.props.step every time
    let newCount = this.state.counter + this.props.step;

    console.log("did this work ? " + newCount);

    //this.state.counter = newCount;

    this.setState({
      counter: newCount
    });

  }
  render() {
    let someState = this.state.someState;
    return (
      <div>
        Hello Jon! {someState}
        The count is {this.state.counter}
        <button onClick={
          /* Arrow functions bind scope automatically.
           * We can use the unbound 'this.count2' by
           * wraping it inside of an arrow function.
           */
          (event) => this.count2(event)
        }>
          Click Me!
        </button>
      </div>
    );
  }
}

/* Two arguments,
 *
 * first argument: the JSX
 * mount point: the dom element we want to attach to
*/
function loadFridayNotes() {
  ReactDOM.render(
    <div>
      <CustomButton step={3}/>
      <p>
        Look ma' I rendered!
      </p>

    </div>,
    document.getElementById('root')
  );
}

addLink("Friday Feb 2nd notes", loadFridayNotes);

