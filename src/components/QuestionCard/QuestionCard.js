import React, { Component } from 'react';
import './QuestionCard.css';

class QuestionCard extends Component {
	render() {
		const { category, quesText } = this.props;

		//console.log('first', question);
		//const questionText = decodeURI(quesText);
		//console.log('second', questionText);
		// console.log(user);
		return (
			<div className="quest_container">
				<div data-testid="question-category">{category}</div>
				<div data-testid="question-text">{quesText}</div>
			</div>
		);
	}
}

export default QuestionCard;
