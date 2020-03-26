/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import './sign-in-form.scss';

class SignInForm extends React.Component {
  render() {
    return (
      <div className='sign-in-form'>
        <label className='sign-in-form__label sign-in-form__login-label' htmlFor='login'>
          Login
          <input type='text' className='sign-in-form__input sign-in-form__login' id='login' />
        </label>
        <label className='sign-in-form__label sign-in-form__email-label' htmlFor='email'>
          E-mail
          <input type='text' className='sign-in-form__input sign-in-form__email' id='email' />
        </label>
        <label className='sign-in-form__label sign-in-form__pass-label' htmlFor='pass'>
          Password
          <input type='password' className='sign-in-form__input sign-in-form__pass' id='pass' />
        </label>
        <input type='submit' className='sign-in-form__submit' value='Sign in' />
      </div>
    );
  }
}

export default SignInForm;
