import React from 'react';
import './header-box.scss';
import SkillButton from './skill-button';
import LoginButton from './login-button';

class HeaderBox extends React.Component {
  render() {
    return (
      <div className="header-box">
        <SkillButton />
        <LoginButton />
      </div>
    )
  }
}

export default HeaderBox;