import React from 'react';
import './skill-button.scss';
import JsIcon from '../../icons/js-icon';

class SkillButton extends React.Component {
  render() {
    return (
      <button className='skill-button'>
        <JsIcon />
        Skill Button
      </button>
    )
  }
}

export default SkillButton;



