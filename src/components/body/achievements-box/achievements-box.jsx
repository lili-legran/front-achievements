import React from 'react';
import axios from 'axios';
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
    const { location } = this.props;
    const prevLocation = prevProps.location.pathname.split('/')[1];
    const currentLocation = location.pathname.split('/')[1];

    if (prevLocation !== currentLocation) {
      this.getAchievements(currentLocation);
    }
  }

  getAchievements = (language) => {
    axios.get(`https://languages-api.glitch.me/${language}`)
      .then((response) => this.setState({
        achievements: response.data
      }))
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('Error!', err);
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
  }).isRequired
};

export default AchievementsBox;
