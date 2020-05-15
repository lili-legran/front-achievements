/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import './sign-up-form.scss';

class SignUpForm extends React.Component {
  render() {
    return (
      <form>
        <h2 className='form-title'>Nice to meet you!</h2>
        <div className='sign-up-form'>
          <label className='sign-up-form__label' htmlFor='sign-up-login'>
            <div className='sign-up-form__logup-label' />
            <input type='text' className='sign-up-form__input sign-up-form__login' id='sign-up-login' placeholder='Login' />
          </label>
          <label className='sign-up-form__label' htmlFor='sign-up-email'>
            <div className='sign-up-form__email-label' />
            <input type='text' className='sign-up-form__input sign-up-form__email' id='sign-up-email' placeholder='E-mail' />
          </label>
          <label className='sign-up-form__label' htmlFor='sign-up-pass'>
            <div className='sign-up-form__pass-label' />
            <input type='password' className='sign-up-form__input sign-up-form__pass' id='sign-up-pass' autoComplete='on' placeholder='Password' />
          </label>
          <label className='sign-up-form__label' htmlFor='sign-up-confirm-pass'>
            <div className='sign-up-form__confirm-pass-label' />
            <input type='password' className='sign-up-form__input sign-up-form__pass' id='sign-up-confirm-pass' autoComplete='on' placeholder='Confirm Password' />
          </label>
          <input type='submit' className='sign-up-form__submit' value='Sign up' />
        </div>
      </form>
    );
  }
}

export default SignUpForm;
