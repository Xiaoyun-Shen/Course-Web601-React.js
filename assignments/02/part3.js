//Create a “TimeDisplay” component that displays a formatted time value
const TimeDisplay=(props)=>{
	var milliseconds=props.milliseconds;
	if (milliseconds<=0){
		return (
			<p>Times up!</p>		
		);
	}
	var centiseconds = Math.floor(milliseconds % 1000 / 10);
	var seconds = Math.floor(milliseconds % 60000 / 1000);
	var minutes = Math.floor(milliseconds / 60000);
	
	const formatTime = (time) => {
		if(time < 10) {
			return '0' + time;
		}
		return time;
	}	
	var timeshowing=formatTime(minutes) + ":" + formatTime(seconds)+ ":" +formatTime(centiseconds);	

	return (
		<p>
		{timeshowing}
		</p>
	);
};

 const Controls=(props)=>{
	  
	  return (
	  <div>
		<input type="radio" onClick={props.countUpClick}/>Count Up
		<br/>
		<input type="radio" onClick={props.countDownClick}/>Cout Down
		<br/><br/>
		Strat Time:  <input type="text" onChange={props.inputChange}/>
	  </div>
	  );
  }

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
      () => this.tick(),
      10
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
 
 tick() {
	 if (this.state.countDown){
		const newMilliseconds=this.state.currentMilliseconds-10;
		this.setState({
			currentMilliseconds:newMilliseconds
		}); 
	 }    
  }  
  
 countUpClick(e){
	 this.setState({
			countDown:false
		});
 }
 
 countDownClick(e){
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
