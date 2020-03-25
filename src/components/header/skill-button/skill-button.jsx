import React from 'react';
import { NavLink } from 'react-router-dom';
import './skill-button.scss';


const SkillButton = (props) => {
  const { icon: Icon, text, currentLocation } = props;

  const isActive = text.toLowerCase() === currentLocation;
  return (
    <NavLink to={`/${text.toLowerCase()}`}>
      <button
        type='button'
        className={`skill-button ${isActive ? 'skill-button__active' : ''}`}
      >
        { Icon && <Icon /> }
        <span className='skill-button__title'>
          {' '}
          {text}
          {' '}
        </span>
      </button>
    </NavLink>
  );
};

export default SkillButton;

SkillButton.propTypes = {

};
