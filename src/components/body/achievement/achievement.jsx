/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './achievement.scss';
import done from '../../../assets/done.png';

class Achievement extends React.Component {
  // state = {
  //   isActive: false
  // }

  // toggleAchievement = () => {
  //   this.setState((prevState) => ({
  //     isActive: !prevState.isActive
  //   }));
  // };

  setIsActive = () => {
    const { setIsActiveAchievement, isActiveAchievement } = this.props;
    setIsActiveAchievement(true);
    // eslint-disable-next-line no-console
    console.log(123, isActiveAchievement);
  }

  render() {
    const { title, description, mark } = this.props;
    // const { setIsActiveAchievement } = this.props;
    // const { isActive } = this.state;
    return (
      // <div className={`achievement ${isActive ? 'achievement__active' : ''}`}
      // onClick={this.toggleAchievement}>
      <div className='achievement'>
        <div className='achievement__designation'>
          <div className='achievement__title'>
            { title }
          </div>
          <div className='achievement__description'>
            { description }
          </div>
        </div>
        <div className='achievement__option'>
          { mark }
          <div className='achievement__option_check' onClick={this.setIsActive}>
            <img
              src={done}
              className='achievement__option_check-img'
              alt='checkmark'
            />
          </div>
        </div>
      </div>
    );
  }
}

Achievement.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mark: PropTypes.number.isRequired,
  setIsActiveAchievement: PropTypes.func.isRequired,
  isActiveAchievement: PropTypes.bool.isRequired
};

export default connect(
  (state) => ({
    isActiveAchievement: state.isActiveAchievement
  }),
  (dispatch) => ({
    setIsActiveAchievement: (param) => dispatch({ type: 'SET_ACTIVE_ACHIEVEMENTS', payload: param })
  })
)(Achievement);
