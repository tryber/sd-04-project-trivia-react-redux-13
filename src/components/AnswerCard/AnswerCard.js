import React, { Component } from 'react';
import './AnswerCard.css';
import Timer from '../Timer';

const Multiple = ({ answer, answered, genColor, timeout }) =>
  <div className="multiple">
    <button
      data-testid="correct-answer" id="correct" onClick={genColor}
    >
      {answer.correct_answer}
    </button><br />
    <button
      data-testid={`wrong-answer-${0}`} onClick={genColor}
    >
      {answer.incorrect_answers[0]}
    </button><br />
    <button
      data-testid={`wrong-answer-${1}`} onClick={genColor}
    >
      {answer.incorrect_answers[1]}
    </button><br />
    <button
      data-testid={`wrong-answer-${2}`} onClick={genColor}
    >
      {answer.incorrect_answers[2]}
    </button>
    <Timer answered={answered} timeout={timeout} />
  </div>;

const Boolean = ({ answer, answered, genColor, timeout }) =>
  <div className="boolean">
    <button
      data-testid="correct-answer" id="correct" onClick={genColor}
    >
      {answer.correct_answer}
    </button><br />
    <button
      data-testid={`wrong-answer-${0}`} onClick={genColor}
    >
      {answer.incorrect_answers[0]}
    </button>
    <Timer answered={answered} timeout={timeout} />
  </div>;

class AnswerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false,
    }
    this.genColor = this.genColor.bind(this);
    this.timeout = this.timeout.bind(this);
  }

  isAnswered(value) {
    return (value ? this.setState({ answered: false }) : this.setState({ answered: true }));
  }

  genColor(e) {
    const parent = [...e.target.parentNode.children];
    return parent.filter((child) => child.tagName === 'BUTTON').forEach((but) => (
      but.id === 'correct' ?
        but.classList.add('correct-answer')
        :
        but.classList.add('wrong-answer')
    ));
  }

  timeout() {
    const eltMulti = [ ...document.querySelector('.multiple').children ];
    eltMulti.filter((child) => child.tagName === 'BUTTON').forEach((but) => but.disabled = true);
    return true;
  }

  render() {
    const { answered } = this.state;
    const { answer } = this.props;
    return (answer.type === 'multiple'
      ?
      <Multiple
        answer={answer} answered={answered} genColor={this.genColor}
        timeout={this.timeout}
      />
      :
      <Boolean
        answer={answer} answered={answered} genColor={this.genColor}
        timeout={this.timeout}
      />
    );
  }
}

export default AnswerCard;
