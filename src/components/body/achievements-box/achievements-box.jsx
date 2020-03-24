import React from 'react';
import axios from 'axios';
import './achievements-box.scss';
import Achievement from '../achievement/achievement';

class AchievementsBox extends React.Component {
  state = {
    achievements: []
  }

  getAchievements = language => {
    axios.get(`https://languages-api.glitch.me/${language}`)
      .then(response => this.setState({
        achievements: response.data
      }))
      .catch(err => {
        console.log('Error!', err);
      });
  }

  componentDidMount() {
    const { activeLanguage } = this.props;
    this.getAchievements(activeLanguage);
  }

  componentDidUpdate(prevProps) {
    const { activeLanguage } = this.props;
    
    if (prevProps.activeLanguage !== activeLanguage) {
      this.getAchievements(activeLanguage);
    }
  }

  render() {
    const { achievements } = this.state;  
    return (
      <div className="achievement-box">
        { achievements.map(item => (
          <Achievement 
            title={ item.title }
            description={ item.description }
            mark={ item.mark }/>
        ) )}
      </div> 
    )
  }
}

export default AchievementsBox;
