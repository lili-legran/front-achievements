/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import './sign-in-form.scss';

class SignInForm extends React.Component {
  render() {
    return (
      <form>
        <div className='sign-in-form'>
          <label className='sign-in-form__label sign-in-form__login-label' htmlFor='sign-in-login'>
            Login
            <input type='text' className='sign-in-form__input sign-in-form__login' id='sign-in-login' />
          </label>
          <label className='sign-in-form__label sign-in-form__email-label' htmlFor='sign-in-email'>
            E-mail
            <input type='text' className='sign-in-form__input sign-in-form__email' id='sign-in-email' />
          </label>
          <label className='sign-in-form__label sign-in-form__pass-label' htmlFor='sign-in-pass'>
            Password
            <input type='password' className='sign-in-form__input sign-in-form__pass' id='sign-in-pass' autoComplete='on' />
          </label>
          <input type='submit' className='sign-in-form__submit' value='Sign in' />
        </div>
      </form>
    );
  }
}

export default SignInForm;
