import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionTokenAdd, actionDataAdd } from '../actions';
import { getLS } from '../helpers';
import QuestionCard from '../components/QuestionCard/QuestionCard';
import PlayerStatus from '../components/playerStatus/playerStatus';
import Timer from '../components/Timer';
// import AnswerCard from '../components/AnswerCard/AnswerCard';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false,
    };
  }

  componentDidMount() {
    const { addToken, addData } = this.props;
    if (getLS('data') !== null) {
      addToken(getLS('token'));
      addData(getLS('data'));
    }
  }

  render() {
    const { answered } = this.state;
    const { loading, questions } = this.props;
    return (loading || questions[0] === undefined ? <h1>Game loading...</h1> :
      <div>
        <h1>Game</h1>
        <PlayerStatus player={getLS('player')} points={666} showSettings={'false'} />
        <QuestionCard
          category={questions[0].category}
          quesText={questions[0].question}
        />
        {/* <AnswerCard answer='Teste' isCorrect/> */}
        <Timer answered={answered} />
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
