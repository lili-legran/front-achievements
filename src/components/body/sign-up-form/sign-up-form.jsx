/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import './sign-up-form.scss';

class SignUpForm extends React.Component {
  render() {
    return (
      <form>
        <div className='sign-up-form'>
          <label className='sign-up-form__label sign-up-form__logup-label' htmlFor='sign-up-login'>
            Login
            <input type='text' className='sign-up-form__input sign-up-form__login' id='sign-up-login' />
          </label>
          <label className='sign-up-form__label sign-up-form__pass-label' htmlFor='sign-up-pass'>
            Password
            <input type='password' className='sign-up-form__input sign-up-form__pass' id='sign-up-pass' autoComplete='on' />
          </label>
          <input type='submit' className='sign-up-form__submit' value='Sign up' />
        </div>
      </form>
    );
  }
}

export default SignUpForm;
