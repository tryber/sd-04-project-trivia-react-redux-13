import React from 'react';

const AnswerCard = ({answer, isCorrect}) => isCorret ? 
  ( 
    <button data-testid='correct-answer' className='correct-answer' />
  )
  :
  (
    <button data-testid='wrong-answer' className='wrong-answer' />
  );

export default AnswerCard;
