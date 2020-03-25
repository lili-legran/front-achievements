/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import './sign-in.scss';

class SignIn extends React.Component {
  render() {
    return (
      <button type='button' className='sign-in-button'>
        Sign In
      </button>
    );
  }
}

export default SignIn;
