//goal:build a stop watch component

//Create a “TimeDisplay” component that displays a formatted time value
const TimeDisplay=(props)=>{
	let milliseconds=props.milliseconds;
	//When the millisecond value is less than or equal to zero, display the string “Times up!” instead of a time value
	if (milliseconds<=0){
		return (
			<p>Times up!</p>
		);
	}
	
	//The ‘millisecond’ value is displayed as a time value in the format “Minute:Seconds:Centiseconds”.
	let centiseconds = Math.floor(milliseconds % 1000 / 10);
	let seconds = Math.floor(milliseconds % 60000 / 1000);
	let minutes = Math.floor(milliseconds / 60000);
	
	const formatTime = (time) => {
		if(time < 10) {
			return '0' + time;
		}
		return time;
	}	
	let time=formatTime(minutes) + ":" + formatTime(seconds)+ ":" +formatTime(centiseconds);	

	return (
		<p>	{time}</p>
	);
};

//Create a “Controls” component which will control our watch.When values on the “Controls” component change, they should update “Watch”’s state
 const Controls=(props)=>{	  
	  return (
	    <div>
		  <fieldset>
			<input type="radio" name="count" onChange={props.countUpClick}/>Count Up
			<br/>
			<input type="radio" name="count" onChange={props.countDownClick}/>Cout Down
			<br/><br/>
			Start Time:  <input type="text" onChange={props.inputChange}/>
		  </fieldset>
		</div>  
	  );
  }

//Create a “Watch” stateful component that will have logic to control the flow of time
class Watch extends React.Component {
  constructor(props) {
    super(props);
	
	this.countUpClick=this.countUpClick.bind(this);
	this.countDownClick=this.countDownClick.bind(this);
	this.inputChange=this.inputChange.bind(this);
    this.state = {
      currentMilliseconds:'',
	  countDown:''
	  }
  }
 
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),10
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
 
 //This timer update the state value of “currentMilliseconds” so the watch counts either up or down (based on whether “countDown” is true or false)
 tick() {
	 if((this.state.currentMilliseconds==='')||(this.state.countDown==='')){		 
		 return null;		 
	 }
	 if (this.state.countDown){
		const newMilliseconds=this.state.currentMilliseconds-10;
		this.setState({
		currentMilliseconds:newMilliseconds
	    }); 
	 }else{
		const newMilliseconds=parseInt(this.state.currentMilliseconds)+10;
		this.setState({
		currentMilliseconds:newMilliseconds
		}); 
	 }	 
  }  
 
//When values on the “Controls” component change, update “Watch”’s state 
 countUpClick(){
	 this.setState({
			countDown:false
		});
 }
 
 countDownClick(){
	 this.setState({
			countDown:true
		});
 }
  inputChange(e){
	  this.setState({
			currentMilliseconds:e.target.value
		});
  }
  
  render() {
    return (
      <div>
		<TimeDisplay milliseconds={this.state.currentMilliseconds}/>
		<Controls countDownClick={this.countDownClick} countUpClick={this.countUpClick} inputChange={this.inputChange}/>	
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    Assignment #2
	<Watch />	
  </div>,
  document.getElementById('root')
);
