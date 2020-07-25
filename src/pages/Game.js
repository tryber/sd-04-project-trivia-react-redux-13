import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionTokenAdd, actionDataAdd } from '../actions';
import { getLS, setLS } from '../helpers';
import './pages_css/Game.css'
import QuestionCard from '../components/QuestionCard/QuestionCard';
import PlayerStatus from '../components/playerStatus/playerStatus';
import AnswerCard from '../components/AnswerCard/AnswerCard';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ctrQuest: 0,
      sum: 0,
    };
    this.sumPoints = this.sumPoints.bind(this);
    this.showNextButton = this.showNextButton.bind(this);
  }

  componentDidMount() {
    const { addToken, addData } = this.props;
    const player = getLS('player');
    if (getLS('data') !== null) {
      addToken(getLS('token'));
      addData(getLS('data'));
    }
    setLS('player',
    { ...player, score: 0 },
    );
  }

  sumPoints() { //  10 + ( timer * dificuldade )
    const { questions } = this.props;
    const { ctrQuest, sum } = this.state;
    const player = getLS('player');
    const difs = [
      {hard: 3},
      {medium: 2},
      {easy: 1},
    ];
    const difficulty = questions[ctrQuest].difficulty;
    let multiply = {};
    let time = 10;
    let auxSum = 0;
    multiply = difs.find((dif) => Object.keys(dif)[0] === difficulty);
    auxSum = 10 + (time * Object.values(multiply));
    auxSum = auxSum + player.score;
    setLS('player',
      { ...player, score: auxSum },
    );
    this.setState({ sum: auxSum });
  }

  showNextButton() {
    const { ctrQuest } = this.state;
    if(ctrQuest >= 5) {
      return ( <Link to='/feedback'>Próximo</Link> )
    }
  }

  render() {
    const { ctrQuest, sum } = this.state;
    const { loading, questions } = this.props;
    return (loading || questions[0] === undefined ? <h1>Game loading...</h1> :
      <div>
        <h1>Game</h1>
        <PlayerStatus player={getLS('player')} score={sum} showSettings={'false'} />
        <QuestionCard
          category={questions[ctrQuest].category}
          quesText={questions[ctrQuest].question}
        />
        <AnswerCard isCorrect={'true'} answer={questions[ctrQuest]} />
        <button onClick={() => this.sumPoints()}>Testa Soma</button>
        <div>
          {this.showNextButton()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  questions: state.data.data,
});

const mapDispatchToProps = (dispatch) => ({
  addToken: (token) => dispatch(actionTokenAdd(token)),
  addData: (data) => dispatch(actionDataAdd(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
