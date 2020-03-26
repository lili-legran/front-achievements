/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { NavLink } from 'react-router-dom';
import './sign-in-button.scss';

class SignInButton extends React.Component {
  render() {
    return (
      <NavLink to='/signin' className='sign-in-header'>
        <button type='button' className='sign-in-header__button'>
          Sign In
        </button>
      </NavLink>
    );
  }
}

export default SignInButton;
