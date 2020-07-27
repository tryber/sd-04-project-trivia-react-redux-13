import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuestionCard.css';

class QuestionCard extends Component {
	render() {
		const { category, quesText } = this.props;

    //  ----------------------------------
    //  Tentativa de conversão do texto
    //  ----------------------------------
		//  console.log('first', question);
		//  const questionText =  JSON.parse(decodeURI(quesText));
		//  console.log('second', questionText);
    //  console.log(user);

		return (
			<div className="quest_container">
				<div data-testid="question-category">{category}</div>
				<div data-testid="question-text">{quesText}</div>
			</div>
		);
	}
}

QuestionCard.propTypes = {
	category: PropTypes.string.isRequired,
	quesText: PropTypes.string.isRequired,
};

export default QuestionCard;
