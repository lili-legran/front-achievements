import React from 'react';
import './header-box.scss';
import SkillButton from '../skill-button/skill-button';
import SignIn from '../sign-in/sign-in';
import SignUp from '../sign-up/sign-up';
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
]

class HeaderBox extends React.Component {
  render() {
    const { location } = this.props;
    const currentLocation = location.pathname.split('/')[1];

    const isLanguagePage = currentLocation === 'css' || currentLocation === 'html' || currentLocation === 'javascript';
    return (
      <div className="header-box">
        <div className="header-box__skills">
          { isLanguagePage && skillButtonParams.map(el => <SkillButton 
              text={ el.text }
              icon={ el.icon }
              currentLocation={ currentLocation }
              />
          )}
        </div>
        <div className=' '>
          <SignIn />
          <SignUp />
        </div>
      </div>
    )
  }
}

export default HeaderBox;

HeaderBox.propTypes = {
  
}