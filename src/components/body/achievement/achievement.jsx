import React from 'react';
import PropTypes from 'prop-types';
import './achievement.scss';

const Achievement = (props) => {
  const { title, description, mark } = props;
  return (
    <div className='achievement'>
      <div className='achievement__designation'>
        <div className='achievement__title'>
          { title }
        </div>
        <div className='achievement__description'>
          { description }
        </div>
      </div>
      <div className='achievement__mark'>
        { mark }
      </div>
    </div>
  );
};

Achievement.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mark: PropTypes.number.isRequired
};

export default Achievement;
