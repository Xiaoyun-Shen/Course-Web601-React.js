/* Basic example demonstrating input - using stateful components */
class BasicInput extends React.Component {
  constructor(props) {
    super(props);
    //this.handleChange = this.handleChange.bind(this);
	this.handleClick = this.handleClick.bind(this);
    this.state = {
      userInput: '',
	  lists:[]
    };
  }
  //handleChange(e) {
  //  this.setState({userInput: e.target.value});
  //}onChange={this.handleChange}
  
  handleClick(e){
	 //this.setState({userInput:  document.getElementById('input').value}); 
	 let newValue=document.getElementById('input').value;
	 this.setState({lists:  [...this.state.lists, newValue]}); 
	 document.getElementById('input').value='';
  }
	  
  render() {
	const list = this.state.lists.map((item, i) => {
		return <li key={i}>{item}</li>
	});
    return (
      <div>
          <p>
            Please enter some input
          </p>
          <input id="input" />
          <button onClick={this.handleClick}>Add</button>
          <ul>
	     {list}
	  </ul>		  
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
