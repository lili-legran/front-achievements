import React from 'react';
import './skill-button.scss';
import SkillIcon from '../../icons/skill-icon';

class SkillButton extends React.Component {
  render() {
    return (
      <button className='skill-button'>
        <SkillIcon />
        Skill Button
      </button>
    )
  }
}

export default SkillButton;

SkillButton.propTypes = {
  
}

