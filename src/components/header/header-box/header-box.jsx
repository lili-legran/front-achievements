import React from 'react';
import './header-box.scss';
import SkillButton from '../skill-button/skill-button';
import SignInButton from '../sign-in-button/sign-in-button';
import SignUpButton from '../sign-up-button/sign-up-button';
import JSIcon from '../../icons/js-icon';
import HtmlIcon from '../../icons/html-icon';
import CssIcon from '../../icons/css-icon';

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
  const { location } = props;
  const currentLocation = location.pathname.split('/')[1].toLowerCase();

  const isLanguagePage = currentLocation === 'css' || currentLocation === 'html' || currentLocation === 'javascript';
  return (
    <div className='header-box'>
      <div className='header-box__skills'>
        { isLanguagePage && skillButtonParams.map((el) => (
          <SkillButton
            text={el.text}
            icon={el.icon}
            currentLocation={currentLocation}
          />
        ))}
      </div>
      <div className='header-box__sign'>
        <SignInButton />
        <SignUpButton />
      </div>
    </div>
  );
};


export default HeaderBox;

HeaderBox.propTypes = {

};
