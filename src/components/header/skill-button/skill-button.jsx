import React from 'react';
import './skill-button.scss';


class SkillButton extends React.Component {
  render() {
    // const Icon = this.props.icon;
    const { selectLanguage, icon: Icon, text, activeLanguage, link} = this.props;
    const isActive = text === activeLanguage;
    return (
      <button
        className={`skill-button ${isActive ? 'skill-button__active' : ''}`}
        NavLink={ link }
        onClick={ () => { selectLanguage(text) }}
      >
        { Icon && <Icon /> }
        <span className='skill-button__title'> {text} </span> 
      </button>
    )
  }
}

export default SkillButton;

SkillButton.propTypes = {
  
}

