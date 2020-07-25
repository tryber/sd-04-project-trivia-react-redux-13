import React, { Component } from 'react';
import './AnswerCard.css';
import Timer from '../Timer';

const Multiple = ({ answer, answered, index }) =>
  <div>
    <button
      data-testid="correct-answer"
    >
      {answer.correct_answer}
    </button><br />
    <button
      data-testid={`wrong-answer-${index}`}
    >
      {answer.incorrect_answers[0]}
    </button><br />
    <button
      data-testid={`wrong-answer-${index}`}
    >
      {answer.incorrect_answers[1]}
    </button><br />
    <button
      data-testid={`wrong-answer-${index}`}
    >
      {answer.incorrect_answers[2]}
    </button>
    <Timer answered={answered} />
  </div>;

const Boolean = ({ answer, answered, index }) =>
  <div>
    <button
      data-testid="correct-answer"
    >
      {answer.correct_answer}
    </button>
    <button
      data-testid={`wrong-answer-${index}`}
    >
      {answer.incorrect_answers[0]}
    </button>
    <Timer answered={answered} />
  </div>;

class AnswerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false,
    }
  }

  isAnswered(value) {
    return (value ? this.setState({ answered: false }) : this.setState({ answered: true }));
  }

  render() {
    const { answered } = this.state;
    console.log(answered)
    const { answer } = this.props;
    const index = 1;
    return (answer.type === 'multiple'
      ?
      <Multiple answer={answer} answered={answered} index={index} />
      :
      <Boolean answer={answer} answered={answered} index={index} />
    );
  }
}

// isCorrect === 'true' ?
//   (
//     <button data-testid='correct-answer' className='correct-answer'>
//       {answer}
//     </button>
//   )
//   :
//   (
//     <button data-testid='wrong-answer' className='wrong-answer'>
//       {answer}
//     </button>
//   );

export default AnswerCard;
