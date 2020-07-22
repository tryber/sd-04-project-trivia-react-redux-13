import React from 'react';
import { connect } from 'react-redux';
import { asyncActionData } from '../actions';
import QuestionCard from '../components/QuestionCard/QuestionCard';

const Game = ({ getData }) => {
  setTimeout(() => {
    const token = JSON.parse(localStorage.getItem('token')).token;
    return getData(`https://opentdb.com/api.php?amount=5&token=${token}`);
  }, 3000);

  return (
    <div>
      <h1>Game</h1>
      <QuestionCard />
      {/* <AnswerCard /> */}
    </div>
  );
}

/* const AnswerCard = ({answer, isCorrect}) => {
  
  if(isCorrect) {
  return (
    <button>{answer}</button>
  )
}; */

const mapDispatchToProps = (dispatch) => ({
  getData: (url) => dispatch(asyncActionData(url)),
});

export default connect(null, mapDispatchToProps)(Game);
