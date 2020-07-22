import React, { Component } from 'react';
import './QuestionCard.css';

class QuestionCard extends Component {
	render() {
		const { category } = this.props;
		return (
			<div>
				<div data-testid="question-category">{category}</div>
				<div data-testid="question-text">Texto da Pergunta</div>
			</div>
		);
	}
}

export default QuestionCard;
