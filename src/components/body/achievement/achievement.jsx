import React from 'react';
import PropTypes from 'prop-types';
import './achievement.scss';

class Achievement extends React.Component {
  state = {
    isActive: false
  }

  toggleAchievement = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    const { title, description, mark } = this.props;
    const { isActive } = this.state;
    return (
      <div className={`achievement ${isActive ? 'achievement__active' : ''}`} onClick={this.toggleAchievement}>
        <div className='achievement__designation'>
          <div className='achievement__title'>
            { title }
          </div>
          <div className='achievement__description'>
            { description }
          </div>
        </div>
        <div className='achievement__mark'>
          { mark }
        </div>
      </div>
    );
  }
}

Achievement.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mark: PropTypes.number.isRequired
};

export default Achievement;
