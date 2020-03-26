/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { NavLink } from 'react-router-dom';
import './sign-up-button.scss';

class SignUpButton extends React.Component {
  render() {
    return (
      <NavLink to='/signup' className='sign-up-header'>
        <button type='button' className='sign-up-header__button'>
          Sign Up
        </button>
      </NavLink>
    );
  }
}

export default SignUpButton;

SignUpButton.propTypes = {

};
