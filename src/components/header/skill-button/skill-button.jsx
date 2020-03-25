import React from 'react';
import { NavLink } from 'react-router-dom';
import './skill-button.scss';


class SkillButton extends React.Component {
  render() {
    const { icon: Icon, text, currentLocation } = this.props;
    
    const isActive = text.toLowerCase() === currentLocation;
    return (
      <NavLink to={ `/${ text.toLowerCase() }`}>
        <button
          className={`skill-button ${isActive ? 'skill-button__active' : ''}`}
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

