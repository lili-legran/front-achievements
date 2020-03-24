import React from 'react';
import { NavLink } from 'react-router-dom';
import './skill-button.scss';


class SkillButton extends React.Component {
  onClickHandler = () => {
    const { selectLanguage, text } = this.props;
    selectLanguage(text.toLowerCase());
  }

  render() {
    const { icon: Icon, text, activeLanguage } = this.props;
    const isActive = text === activeLanguage;
    return (
      <NavLink to={ `/${ text.toLowerCase() }`}>
        <button
          className={`skill-button ${isActive ? 'skill-button__active' : ''}`}
          onClick={ this.onClickHandler }
        >
          { Icon && <Icon /> }
          <span className='skill-button__title'> {text} </span> 
        </button>
      </NavLink>
      
    )
  }
}

export default SkillButton;

SkillButton.propTypes = {
  
}

