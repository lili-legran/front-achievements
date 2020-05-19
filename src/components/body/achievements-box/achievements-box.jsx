import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './achievements-box.scss';
import AchievementType from '../achievement-type/achievement-type';

class AchievementsBox extends React.Component {
  state = {
    currentLanguageAchievements: {},
    currentLanguage: ''
  }

  componentDidMount() {
    const { location } = this.props;
    const currentLocation = location.pathname.split('/')[1];
    this.getAchievements(currentLocation);
  }

  componentDidUpdate(prevProps) {
    const { location, achievements } = this.props;
    const prevAchievements = prevProps.achievements;
    const prevLocation = prevProps.location.pathname.split('/')[1];
    const currentLocation = location.pathname.split('/')[1];

    if (prevLocation !== currentLocation || prevAchievements !== achievements) {
      this.getAchievements(currentLocation);
    }
  }

  getAchievements = (language) => {
    const { achievements } = this.props;
    this.setState({
      currentLanguageAchievements: achievements[language] || {},
      currentLanguage: language
    });
  }

  render() {
    const { currentLanguageAchievements, currentLanguage } = this.state;
    const keys = Object.keys(currentLanguageAchievements); // ['basic', 'advanced']
    return (
      <div className='achievement-box'>
        { keys.map((item) => (
          <AchievementType
            key={item}
            typeAchievements={currentLanguageAchievements[item]}
            type={item}
            language={currentLanguage}
          />
        ))}
      </div>
    );
  }
}

AchievementsBox.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired,
  achievements: PropTypes.shape({
    html: PropTypes.shape({}),
    css: PropTypes.shape({}),
    javascript: PropTypes.shape({})
  }).isRequired
};

export default connect(
  (state) => ({
    achievements: state.achievements
  })
)(AchievementsBox);
