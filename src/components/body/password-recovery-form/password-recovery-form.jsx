/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './password-recovery-form.scss';

class PasswordRecoveryForm extends React.Component {
  render() {
    return (
      <form>
        <div className='pass-recovery-form'>
          <label className='pass-recovery-form__label pass-recovery-form__pass-label' htmlFor='pass-recovery'>
            New Password
            <input type='password' className='pass-recovery-form__input pass-recovery-form__pass' id='pass-recovery' autoComplete='on' />
          </label>
          <label className='pass-recovery-form__label pass-recovery-form__pass-label' htmlFor='pass-recovery-confirm'>
            Confirm Password
            <input type='password' className='pass-recovery-form__input pass-recovery-form__pass' id='pass-recovery-confirm' autoComplete='on' />
          </label>
          <input type='submit' className='pass-recovery-form__submit' value='Change password' />
        </div>
      </form>
    );
  }
}

export default PasswordRecoveryForm;
