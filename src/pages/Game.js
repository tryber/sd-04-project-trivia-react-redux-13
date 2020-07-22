import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncActionData } from '../actions';
import QuestionCard from '../components/QuestionCard/QuestionCard';
import PlayerStatus from '../components/playerStatus/playerStatus';

class Game extends Component {
  componentDidMount() {
    setTimeout(() => {
      const token = JSON.parse(localStorage.getItem('token')).token;
      return this.props.getData(`https://opentdb.com/api.php?amount=5&token=${token}`);
    }, 3000);
  }

  render() {
    const { loading, question, user } = this.props;
    return (loading || question === undefined ? <p>Loading...</p> :
      (
        <div>
          <h1>Game</h1>
          <PlayerStatus player={'player'} points={666} showSettings={'false'} />
          <QuestionCard category={question.category} />
          {/* <AnswerCard /> */}
        </div>
      )
    );
  }
}

/* const AnswerCard = ({answer, isCorrect}) => {
  
  if(isCorrect) {
  return (
    <button>{answer}</button>
  )
}; */

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  question: state.data.data[0],
  user: state.users.users[0],
});

const mapDispatchToProps = (dispatch) => ({
  getData: (url) => dispatch(asyncActionData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
