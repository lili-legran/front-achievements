import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './header-box.scss';
import SkillButton from '../skill-button/skill-button';
import SignInButton from '../sign-in-button/sign-in-button';
import SignUpButton from '../sign-up-button/sign-up-button';
import JSIcon from '../../icons/js-icon';
import HtmlIcon from '../../icons/html-icon';
import CssIcon from '../../icons/css-icon';
import LogOutButton from '../../body/log-out-button/log-out-button';

const skillButtonParams = [
  {
    text: 'JavaScript',
    icon: JSIcon
  },
  {
    text: 'HTML',
    icon: HtmlIcon
  },
  {
    text: 'CSS',
    icon: CssIcon
  }
];

const HeaderBox = (props) => {
  const { location, isAuthorized } = props;
  const currentLocation = location.pathname.split('/')[1].toLowerCase();

  const isLanguagePage = currentLocation === 'css' || currentLocation === 'html' || currentLocation === 'javascript';
  return (
    <div className='header-box'>
      <div className='header-box__skills'>
        { isLanguagePage && skillButtonParams.map((el) => (
          <SkillButton
            key={el.text}
            text={el.text}
            icon={el.icon}
            currentLocation={currentLocation}
          />
        ))}
      </div>
      {
        isAuthorized
          ? (
            <div className='header-box__sign'>
              <span>Nickname</span>
              <LogOutButton />
            </div>
          )
          : (
            <div className='header-box__sign'>
              <SignInButton />
              <SignUpButton />
            </div>
          )
        }
    </div>
  );
};

HeaderBox.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired,
  isAuthorized: PropTypes.bool.isRequired
};

export default connect(
  (state) => ({
    isAuthorized: state.isAuthorized
  })
)(HeaderBox);
