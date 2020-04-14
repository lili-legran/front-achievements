import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './achievements-box.scss';
import Achievement from '../achievement/achievement';

class AchievementsBox extends React.Component {
  state = {
    achievements: []
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
      achievements: achievements[language] || []
    });
  }

  render() {
    const { achievements } = this.state;

    return (
      <div className='achievement-box'>
        { achievements.map((item) => (
          <Achievement
            key={item.title}
            title={item.title}
            description={item.description}
            mark={item.mark}
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
    html: PropTypes.array,
    css: PropTypes.array,
    javascript: PropTypes.array
  }).isRequired
};

export default connect(
  (state) => ({
    achievements: state.achievements
  })
)(AchievementsBox);
