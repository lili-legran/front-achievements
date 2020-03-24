import React from 'react';
import './header-box.scss';
import SkillButton from '../skill-button/skill-button';
import LoginButton from '../login-button/login-button';
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
    const {selectLanguage, activeLanguage} = this.props;
    return (
      <div className="header-box">
        <div className="header-box__skills">
          { skillButtonParams.map(el => <SkillButton 
              text={ el.text }
              icon={ el.icon }
              selectLanguage={ selectLanguage } 
              activeLanguage={ activeLanguage }/>
          ) }
        </div>
        <LoginButton />
      </div>
    )
  }
}

export default HeaderBox;

HeaderBox.propTypes = {
  
}