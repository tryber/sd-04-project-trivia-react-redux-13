import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './pages_css/Feedback.css';
import PlayerStatus from '../components/playerStatus/playerStatus';
import { getLS } from '../helpers';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackMsg: '',
      pt: 0,
      rightQuest: 1,
      rendRedirect: false,
      nextScreen: '',
    };
  }

  componentDidMount() {
    const player = getLS('player');
    this.setState({ pt: player.score, rightQuest: player.assertions });
    this.comparaAcertos();
  }

  comparaAcertos() {
    const { rightQuest } = this.state;
    if (rightQuest < 3) {
      this.setState({ feedbackMsg: 'Podia ser melhor...' });
    } else if (rightQuest >= 3) {
      this.setState({ feedbackMsg: 'Mandou bem!' });
    }
  }

  handleClick(tela) {
    this.setState({ rendRedirect: true, nextScreen: tela });
  }

  render() {
    const { pt, rightQuest, rendRedirect } = this.state;
    if (rendRedirect) {
      return <Redirect Push to={this.state.nextScreen} />;
    }
    return (
      <div>
        <PlayerStatus
          player={getLS('player')}
          score={pt}
          showSettings={'true'} 
        />
        <div data-testid="feedback-text" className="feedback-text">
          {this.state.feedbackMsg}
        </div>
        <div data-testid="feedback-total-score" className="feedback-score">
          <span data-testid="feedback-total-question">
            {`Você acertou ${rightQuest} questões!`}
          </span>
          <br />
          {`Um total de ${pt} pontos`}
        </div>
        <button data-testid="btn-ranking" onClick={() => this.handleClick('/ranking')}>
          VER RANKING
        </button>
        <br />
        <button data-testid="btn-play-again" onClick={() => this.handleClick('/game')}>
          JOGAR NOVAMENTE
        </button>
      </div>
    );
  }
}

export default Feedback;
