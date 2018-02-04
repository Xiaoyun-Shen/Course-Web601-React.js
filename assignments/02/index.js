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

ReactDOM.render(
  <TimeDisplay millisecond={789234}/>,
  document.getElementById('root')
);
