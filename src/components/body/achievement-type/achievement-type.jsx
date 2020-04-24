/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import Achievement from '../achievement/achievement';

class AchievementType extends React.Component {
  render() {
    const { typeAchievements, type, language } = this.props;
    return (
      <div className='achievement-type'>
        <h2>{type.toUpperCase()}</h2>
        {typeAchievements.map((achieve) => (
          <Achievement
            key={achieve.id}
            title={achieve.title}
            description={achieve.description}
            mark={achieve.mark}
            id={achieve.id}
            language={language}
            type={type}
            completed={achieve.completed}
          />
        ))}
      </div>
    );
  }
}

AchievementType.propTypes = {
  typeAchievements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      titile: PropTypes.string,
      description: PropTypes.string,
      mark: PropTypes.number
    })
  ).isRequired,
  type: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired
};

export default AchievementType;
