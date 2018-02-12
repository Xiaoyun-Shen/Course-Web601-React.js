function answer1() {
  /* Replace 'undefined' with some JSX */
  return undefined;
}


function answer2() {
  class BuggyComponent extends React.Component {
    render() {
      return (
        <div>
          a + b =
          {this.props.four + this.props.seven}
        </div>
      );
    }
  }

  return (
    <BuggyComponent a={4} b={7}/>
  );
}


function answer3() {
  function AddAPropToMe(someProps) {
    return (
      <div>
        {someProps.one}
        , {someProps.two}
        ,
        is a sort of fun game!
      </div>
    );
  }

  return (
    <AddAPropToMe
      one={'Tic'}
      two={'tac'}
    />
  );
}


function answer4() {
  class InputComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        userInput: ''
      };
    }
    render() {
      return (
        <div>
          <input/>
          <p>
            The user typed `{this.state.userInput}`
          </p>
        </div>
      );
    }
  }

  return <InputComponent/>;
}

function answer5() {
  class Dots extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
    }
    componentDidMount() {
      var counter = function() {
        console.log(this.state.count);
        this.setState({
          count: ((this.state.count + 1) % 3) + 1
        });
      }.bind(this);

      setInterval(counter, 1000);
    }
    render() {
      var dots = '...';

      return (
        <div>
          {dots}
        </div>
      );
    }
  }

  return <Dots/>;
}

function answer6() {
  function convertMeToArrowSyntax(a, b, c) {
    return a * (b - c);
  }

  return convertMeToArrowSyntax(3, 7, 5);
}

function answer7() {
  var myObject = {
    x: 8,
    y: 3
  };

  function addXtoY() {
    return this.x + this.y;
  }

  try {
    return addXtoY();
  } catch(e) {
    return String(e);
  }
}

function answer8() {
  var myObject = {
    x: 8,
    y: 3,
    addXtoY: function() {
      return this.x + this.y;
    }
  };

  function Component(props) {
    return (
      <div>
        AddXtoY returned {props.callback()}
      </div>
    );
  }

  return (
    <Component callback={myObject.addXtoY}/>
  );
}
