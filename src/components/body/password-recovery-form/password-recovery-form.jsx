/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './password-recovery-form.scss';

class PasswordRecoveryForm extends React.Component {
  render() {
    return (
      <form>
        <h2 className='form-title'>Create your best password!</h2>
        <div className='pass-recovery-form'>
          <label className='pass-recovery-form__label' htmlFor='pass-recovery'>
            <div className='pass-recovery-form__pass-label' />
            <input type='password' className='pass-recovery-form__input pass-recovery-form__pass' id='pass-recovery' autoComplete='on' placeholder='New password' />
          </label>
          <label className='pass-recovery-form__label' htmlFor='pass-recovery-confirm'>
            <div className=' pass-recovery-form__confirm-pass-label' />
            <input type='password' className='pass-recovery-form__input pass-recovery-form__pass' id='pass-recovery-confirm' autoComplete='on' placeholder='Confirm password' />
          </label>
          <input type='submit' className='pass-recovery-form__submit' value='Change password' />
        </div>
      </form>
    );
  }
}

export default PasswordRecoveryForm;
