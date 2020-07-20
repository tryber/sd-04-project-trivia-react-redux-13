import React from 'react';
import PropTypes from 'prop-types';
import { connect } from '';

const RankingList = ({ avatar, name, score, index }) => {
  return (
      <div>
        <ul>
          <li>
            <img src={avatar} alt={`${name} Avatar`}/>
            <p data-testid={`player-name-${index}`}>{name}</p>
            <p>{score}</p>
          </li>
        </ul>
      </div>
  );
};

Ranking.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

mapStateToProps = (state) => {

}

mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
