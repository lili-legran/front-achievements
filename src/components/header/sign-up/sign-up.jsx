import React from 'react';
import './sign-up.scss';
import { NavLink } from 'react-router-dom';

class SignUp extends React.Component {
  render() {
    const { activePage } = this.props;
    console.log(activePage, '<<<<<<');
    return (
      <NavLink to={`/signup`}>
        <button className='sign-up-button'>
          Sign Up
        </button>
      </NavLink>
    )
  }
}

export default SignUp;

SignUp.propTypes = {
  
}