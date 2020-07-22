import React, { Component } from 'react';
import { connect } from 'react-redux';
import './QuestionCard.css';

class QuestionCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataState: this.props.dataStore,
		}
	}

	render() {
		const { loading } = this.props;
		const { dataState } = this.state;
		console.log('Data before return: ', dataState)
		return (loading ? <p>Loading...</p> :
			(
				<div>
					{console.log('Data after return: ', dataState)}
					<div data-testid="question-category"></div>
					<div data-testid="question-text">Texto da Pergunta</div>
				</div>
			)
		);
	}
}

const mapStateToProps = (state) => ({
	dataStore: state.data,
	loading: state.data.loading,
});

export default connect(mapStateToProps, null)(QuestionCard);
