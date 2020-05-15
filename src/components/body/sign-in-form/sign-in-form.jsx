import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './sign-in-form.scss';

class SignInForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  setusername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  setPassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit = (e) => {
    const { username, password } = this.state;
    const { history } = this.props;
    e.preventDefault();
    const { setIsAuthourized } = this.props;
    axios.post('https://languages-api.glitch.me/login', {
      username,
      password
    })
      .then(() => {
        setIsAuthourized(true);
        history.push('/');
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('Error!', err);
      });
  }

  render() {
    const { username, password } = this.state;
    return (
      <form>
        <h2 className='form-title'>Welcome!</h2>
        <div className='sign-in-form'>
          <label className='sign-in-form__label' htmlFor='sign-in-login'>
            <div className='sign-in-form__login-label' />
            <input
              type='text'
              onChange={this.setusername}
              className='sign-in-form__input sign-in-form__login'
              id='sign-in-login'
              value={username}
              placeholder='Login'
            />
          </label>
          <label className='sign-in-form__label' htmlFor='sign-in-pass'>
            <div className=' sign-in-form__pass-label' />
            <input
              type='password'
              onChange={this.setPassword}
              className='sign-in-form__input sign-in-form__pass'
              id='sign-in-pass'
              autoComplete='on'
              value={password}
              placeholder='Password'
            />
          </label>
          <div className='sign-in-form__recovery-pass'>
            <NavLink to='/password-recovery' className='sign-in-form__recovery-pass-link'>
              Forgot your password?
            </NavLink>
          </div>
          <input type='submit' onClick={this.handleSubmit} className='sign-in-form__submit' value='Sign in' />
        </div>
      </form>
    );
  }
}

SignInForm.propTypes = {
  setIsAuthourized: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};

export default connect(
  null,
  (dispatch) => ({
    setIsAuthourized: (param) => dispatch({ type: 'AUTHORIZATION/SET', payload: param })
  })
)(SignInForm);
