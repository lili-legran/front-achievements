/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import './sign-up.scss';
import { NavLink } from 'react-router-dom';

class SignUp extends React.Component {
  render() {
    return (
      <NavLink to='/signup'>
        <button type='button' className='sign-up-button'>
          Sign Up
        </button>
      </NavLink>
    );
  }
}

export default SignUp;

SignUp.propTypes = {

};
