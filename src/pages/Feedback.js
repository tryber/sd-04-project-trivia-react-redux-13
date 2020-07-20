import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './pages_css/Feedback.css';
import PlayerStatus from '../components/playerStatus/playerStatus';

class Feedback extends Component {
  constructor(props){
    super(props);
    this.state = {
      feedbackMsg: 'test',
      points: 666,
      player: "SASUKE",
      rightQuest: 1,
      rendRedirect: false,
      nextScreen: '',
    };
  }

  comparaAcertos() {
    const { rightQuest } = this.state;
    if (rightQuest < 3) {
      this.setState({ feedbackMsg: "Podia ser melhor..." });
    } else if (rightQuest >= 3) {
      this.setState({ feedbackMsg: "Mandou bem!" });
    }
  }

  componentDidMount() {
    this.comparaAcertos();
  }

  handleClick(tela) {
    this.setState({ rendRedirect: true, nextScreen: tela });
  }

  render() {
    const { player, points, rightQuest, rendRedirect } = this.state;

    if (rendRedirect) {
      return <Redirect Push to={this.state.nextScreen}/>
    }
    return (
      <div>
        <PlayerStatus player={player} points={points} showSettings={true}/>
        <div data-testid="feedback-text" className="feedback-text">
          {this.state.feedbackMsg}
        </div>
        <div data-testid="feedback-total-score" className="feedback-score">
          <span data-testid="feedback-total-question">
            {`Você acertou ${rightQuest} questões!`}
          </span>
          <br />
          {`Um total de ${points} pontos`}
        </div>
        <button onClick={() => this.handleClick("/ranking")}>
          VER RANKING
        </button>
        <br />
        <button onClick={() => this.handleClick("/game")}>
          JOGAR NOVAMENTE
        </button>
      </div>
    );
  }
}

export default Feedback;
