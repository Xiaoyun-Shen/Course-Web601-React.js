function answer1() {
  return (
    <div>
      Hello world!
    </div>
  );
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
