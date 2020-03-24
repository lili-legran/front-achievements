import React from 'react';
import './achievement.scss';

class Achievement extends React.Component {
  render() {
    const { title, description, mark } = this.props;
    return (
      <div className='achievement'>
        <div className="achievement__designation">
          <div className="achievement__title">
            { title }
          </div>
          <div className="achievement__description">
            { description }
          </div>
        </div>
        <div className="achievement__mark">
          { mark }
        </div>
      </div>
    )
  }
}

export default Achievement;