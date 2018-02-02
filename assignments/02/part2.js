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
	let timeshowing=formatTime(minutes) + ":" + formatTime(seconds)+ ":" +formatTime(centiseconds);	

	return (
		<p>
		{timeshowing}
		</p>
	);
};

class Watch extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      currentMilliseconds:this.props.startTime,
	  countDown:true
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
	 if (this.props.countDown){
		const newMilliseconds=this.state.currentMilliseconds-10;
		this.setState({
			currentMilliseconds:newMilliseconds
		}); 
	 }    
  }  
  
 
  render() {
    return (
      <div>
		<TimeDisplay milliseconds={this.state.currentMilliseconds}/>
		
		Start Time: {this.props.startTime}        
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    Assignment #2
	<Watch startTime="72689" countDown="true"/>
  </div>,
  document.getElementById('root')
);
