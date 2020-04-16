/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from './components/loading/loading';
import loadingImg from './assets/download.png';
import SkillCheck from './components/skill-check';

class App extends React.Component {
  render() {
    const { isLoading } = this.props;
    return (
      <>
        <SkillCheck />
        {isLoading && (
          <Loading>
            <img src={loadingImg} className='loading__img' alt='download' />
          </Loading>
        )}
      </>
    );
  }
}

App.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default connect(
  (state) => ({
    isLoading: state.isLoading
  })
)(App);
