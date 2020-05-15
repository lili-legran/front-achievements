/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './achievement.scss';
import done from '../../../assets/done.png';

class Achievement extends React.Component {
  setIsActive = () => {
    const {
      setCompletedAchievement,
      id,
      type,
      language
    } = this.props;

    setCompletedAchievement({
      id,
      language,
      type
    });
  }

  render() {
    const {
      title,
      description,
      mark,
      completed
    } = this.props;
    return (
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
          <div className='achievement__option_mark'>{ mark }</div>
          <div>
            {!completed && (
              <button type='button' className='achievement__option_check' onClick={this.setIsActive}>DONE</button>
            )}
            {completed && (
              <img
                src={done}
                className='achievement__option_check-img'
                alt='checkmark'
              />
            )}
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
  setCompletedAchievement: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default connect(
  null,
  (dispatch) => ({
    setCompletedAchievement: (param) => dispatch({ type: 'ACHIEVEMENT/COMPLETE_ONE', payload: param })
  })
)(Achievement);
