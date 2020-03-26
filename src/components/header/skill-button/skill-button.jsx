import React from 'react';
import { NavLink } from 'react-router-dom';
import './skill-button.scss';


const SkillButton = (props) => {
  const { icon: Icon, text, currentLocation } = props;

  const isActive = text.toLowerCase() === currentLocation;
  return (
    <NavLink to={`/${text.toLowerCase()}`} className='skill'>
      <button
        type='button'
        className={`skill__button ${isActive ? 'skill__button-active' : ''}`}
      >
        { Icon && <Icon /> }
        <span className='skill__button_title'>
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
