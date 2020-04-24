import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './log-out-button.scss';

class LogOutButton extends React.Component {
  onClickHandler = () => {
    const { setIsAuthourized } = this.props;
    setIsAuthourized(false);
  }

  render() {
    return (
      <div className='log-out-header'>
        <button type='button' className='log-out-header__button' onClick={this.onClickHandler}>
          Log Out
        </button>
      </div>
    );
  }
}

LogOutButton.propTypes = {
  setIsAuthourized: PropTypes.func.isRequired
};

export default connect(
  null,
  (dispatch) => ({
    setIsAuthourized: (param) => dispatch({ type: 'AUTHORIZATION/SET', payload: param })
  })
)(LogOutButton);
