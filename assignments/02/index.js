const formatTime = (time) => {
  if(time < 10) {
    return '0' + time;
  }
  return time;
};

function TimeDisplay(props) {
  let centiseconds = formatTime(
    Math.floor(
      props.millisecond % 1000 / 10
    )
  );
  let seconds = formatTime(
    Math.floor(
      props.millisecond % 60000 / 1000
    )
  );
  let minutes = formatTime(
    Math.floor(
      props.millisecond / 60000
    )
  );

  if(props.millisecond === 0) {
    return (
      <div>
        Times up!
      </div>
    );
  } else {
    return (
      <div>
        {/*00:01:54*/}
        {/*props.millisecond*/}
        {minutes}:{seconds}:{centiseconds}
      </div>
    );
  }
}

// 3000
var watchScope1 = null;
var watchScope2 = null;
class Watch extends React.Component {
  // pass in start time, end time
  constructor(props) {
    super(props);

    this.state = {
      currentMilliseconds: props.currentMilliseconds
    };

    this.counter();
  }
  // use setInterval
  counter() {
    setInterval(
      function() {
        let newTime =
          this.state.currentMilliseconds;

        // thought here... talk in a second
        newTime += 10;
        this.setState({
          currentMilliseconds: newTime
        });
      }.bind(this),
      10
    );
  }
  render() {
    return (
      <div>
        <TimeDisplay
            millisecond={
              this.state.currentMilliseconds
            }
          />
        Hello world!
        {this.state.currentMilliseconds}
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <TimeDisplay millisecond={789234}/>
    <Watch currentMilliseconds={55000}/>
  </div>,
  document.getElementById('root')
);
