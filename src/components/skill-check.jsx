import React from 'react';
import './skill-check.scss';
import HeaderBox from './header/header-box/header-box';
import AchievementsBox from './body/achievements-box/achievements-box';

class SkillCheck extends React.Component {
  state = {
    activeLanguage: 'JavaScript'
  }

  selectLanguage = (value) => {
    this.setState({
      activeLanguage: value
    }, () => { console.log(value) }) 
  }

  render() {
    const {activeLanguage} = this.state;
    return (
      <div className='skill-check'>
        <HeaderBox selectLanguage={this.selectLanguage} activeLanguage={ activeLanguage }/>
        {/* <Route /> */}
        <AchievementsBox  />
      </div>
    )
  }
}

export default SkillCheck;