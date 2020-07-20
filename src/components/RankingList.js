import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class RankingList extends React.Component {

  render() {
    const { avatar, name, score, index } = this.props;
    return (
      <div>
        <ul>
          <li>
            <img src={avatar} alt={`${name} Avatar`} />
            <p data-testid={`player-name-${index}`}>{name}</p>
            <p>{score}</p>
          </li>
        </ul>
      </div>
    );
  }
}

RankingList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  avatar: state.ranking.avatar,
  name: state.ranking.name,
  score: state.ranking.score,
});

export default connect(mapStateToProps)(RankingList);
