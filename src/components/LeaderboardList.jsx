import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItem from './LeaderboardItem';
import {userProp} from '../utils/propsHelper';

function LeaderboardList({leaderboards}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between text-xl">
        <p>User</p>
        <p>Score</p>
      </div>
      <div className="flex flex-col gap-3">
        {leaderboards.map(({user, score}) => (
          <LeaderboardItem
            key={user.id}
            avatar={user.avatar}
            name={user.name}
            score={score}
          />
        ))}
      </div>
    </div>
  );
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(
      PropTypes.shape({
        user: PropTypes.shape(userProp).isRequired,
        score: PropTypes.number.isRequired,
      }),
  ).isRequired,
};

export default LeaderboardList;
