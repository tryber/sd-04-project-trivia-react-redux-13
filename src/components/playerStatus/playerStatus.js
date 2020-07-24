import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './playerStatus.css';

class PlayerStatus extends React.Component {
  renderPoints() {
    const { showSettings, points } = this.props;
    if (showSettings === 'true') {
      return (
        <div className="points_container">
          <h3 data-testid="header-score" className="points">Pontos: {points}</h3>
          <Link className="link" to="/settings">
            <i className="fa fa-cog fa-2x" />
          </Link>
        </div>
      );
    }
    return (
      <div className="points_container">
        <h3 data-testid="header-score" className="points">Pontos: {points}</h3>
      </div>
    );
  }

  render() {
    const { player } = this.props;
    return (
      <header className="header_container">
        <div className="player_container">
          <div data-testid="header-profile-picture" >
            <i className="fa fa-user-circle fa-2x" />
          </div>
          <h3 data-testid="header-player-name" className="player">Jogador: {player.name}</h3>
        </div>
        {this.renderPoints()}
      </header>
    );
  }
}

PlayerStatus.propTypes = {
  showSettings: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  //player: PropTypes.string.isRequired,
};

export default PlayerStatus;
