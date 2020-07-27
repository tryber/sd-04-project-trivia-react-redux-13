import React, { Component } from 'react';
import './AnswerCard.css';
import { getElt, setSS } from '../../helpers';


// Componente de alternativas multiplas

const Multiple = ({ answer, genColor, callBack }) =>
  <div className="multiple">
    <button
      data-testid="correct-answer"
      id="correct"
      onClick={(event) => { genColor(event); callBack(true) }}
    >
      {answer.correct_answer}
    </button><br />
    <button
      data-testid={`wrong-answer-${0}`} onClick={(event) => { genColor(event); callBack(false) }}
    >
      {answer.incorrect_answers[0]}
    </button><br />
    <button
      data-testid={`wrong-answer-${1}`} onClick={(event) => { genColor(event); callBack(false) }}
    >
      {answer.incorrect_answers[1]}
    </button><br />
    <button
      data-testid={`wrong-answer-${2}`} onClick={(event) => { genColor(event); callBack(false) }}
    >
      {answer.incorrect_answers[2]}
    </button>
  </div>;


// Componente de alternativas booleanas

const Boolean = ({ answer, genColor, callBack }) =>
  <div className="boolean">
    <button
      data-testid="correct-answer"
      id="correct"
      onClick={(event) => { genColor(event); callBack(true) }}
    >
      {answer.correct_answer}
    </button><br />
    <button
      data-testid={`wrong-answer-${0}`} onClick={(event) => { genColor(event); callBack(false) }}
    >
      {answer.incorrect_answers[0]}
    </button>
  </div>;


// Componente principal

class AnswerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false,
      timer: 30,
    }
    this.genColor = this.genColor.bind(this);
    this.timeout = this.timeout.bind(this);
    this.callBack = this.callBack.bind(this);
  }

  // Inicia timer assim q componente renderiza

  componentDidMount() {
    const setInt = setInterval(() => {
      if (this.state.answered) {
        clearInterval(setInt);
        return true;
      }
      if (this.state.timer === 0) {
        clearInterval(setInt)
        this.timeout(); // Desabilita os botões após 30 seg
        return true;
      }
      return this.setState((prevState) => ({
        timer: prevState.timer - 1,
      }))
    }, 1000);
  }

  genColor(e) {
    const parent = [...e.target.parentNode.children];
    this.setState({ answered: true });
    setSS('timer', this.state.timer);
    return parent.filter((child) => child.tagName === 'BUTTON').forEach((but) => (
      but.id === 'correct'
        ? but.classList.add('correct-answer')
        : but.classList.add('wrong-answer')
    ));
  }

  callBack(isCorrect) {
    this.props.showNextButton2(true, isCorrect);
  }

  timeout() {
    const eltMulti = [ ...getElt('.multiple').children ];
    eltMulti.filter((child) => child.tagName === 'BUTTON').forEach((but) => but.disabled = true);
    return true;
  }

  render() {
    const { timer } = this.state;
    const { answer } = this.props;
    return (answer.type === 'multiple'
      ? <div>
          <Multiple answer={answer} genColor={this.genColor} callBack={this.callBack} />
          <p>{timer}</p>
        </div>
      : <div>
          <Boolean answer={answer} genColor={this.genColor} callBack={this.callBack} />
          <p>{timer}</p>
        </div>
    );
  }
}

export default AnswerCard;
