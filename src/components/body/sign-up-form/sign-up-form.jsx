import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './sign-up-form.scss';

class SignUpForm extends React.Component {
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
        <div className='sign-up-form'>
          <label className='sign-up-form__label sign-up-form__logup-label' htmlFor='sign-up-login'>
            Login
            <input
              type='text'
              onChange={this.setusername}
              className='sign-up-form__input sign-up-form__login'
              id='sign-up-login'
              value={username}
            />
          </label>
          <label className='sign-up-form__label sign-up-form__pass-label' htmlFor='sign-up-pass'>
            Password
            <input
              type='password'
              onChange={this.setPassword}
              className='sign-up-form__input sign-up-form__pass'
              id='sign-up-pass'
              autoComplete='on'
              value={password}
            />
          </label>
          <input type='submit' onClick={this.handleSubmit} className='sign-up-form__submit' value='Sign up' />
        </div>
      </form>
    );
  }
}

SignUpForm.propTypes = {
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
)(SignUpForm);
