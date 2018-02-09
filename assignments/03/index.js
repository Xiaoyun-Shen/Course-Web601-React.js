const Question = (props) => {
  return (
    <div>
      <div>
        <span>
          Q{props.number}.
        </span>
        <span>
          {props.question}
        </span>
      </div>
      <br/>
      <div>
        {eval(`answer${props.number}()`)}
      </div>
    </div>
  );
};

const questions = [
  `
  Write a line of JSX that renders 'Hello world!'
  `,
  `
  This class component has has a bug in it,
  fix it so it renders the sum of its props (4 and 7)
  `,
  `
  Change this functional component so it accepts a third prop ("toe") and renders it to the screen
  `,
  `
  Add a method to this class component so that it saves any input the user types to the state key 'userInput'. You *must* use the onchange event (no jQuery or accessing the DOM directly!)
  `
];

const renderedQuestions = questions.map(
  (question, index) =>
  <div key={index}>
    <Question
      number={index + 1}
      question={question}/>
    <br/>
    <br/>
  </div>
);

ReactDOM.render(
  <div>
    <p>
      Assignment #3
    </p>
    <br/>
    {renderedQuestions}
  </div>,
  document.getElementById('root')
);
