/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Route,
  BrowserRouter,
  Redirect,
  Switch
} from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import ErrorPage from './body/error-page/error-page';
import HeaderBox from './header/header-box/header-box';
import AchievementsBox from './body/achievements-box/achievements-box';
import SignUpForm from './body/sign-up-form/sign-up-form';
import SignInForm from './body/sign-in-form/sign-in-form';
import './skill-check.scss';

class SkillCheck extends React.Component {
  componentDidMount() {
    const { setAchievements, setLoading } = this.props;
    setLoading(true);
    axios.get('https://languages-api.glitch.me/achievements')
      .then((response) => {
        setAchievements(response.data);
        setLoading(false);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('Error!', err);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className='skill-check'>
          <Route component={HeaderBox} />
          <Switch>
            <Route exact path='/'>
              <Redirect to='/javascript' />
            </Route>
            <Route
              path={['/html', '/css', '/javascript']}
              render={(props) => <AchievementsBox {...props} />}
            />
            <Route path='/signup' component={SignUpForm} />
            <Route path='/signin' component={SignInForm} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

SkillCheck.propTypes = {
  setAchievements: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired
};


export default connect(
  null,
  (dispatch) => ({
    setAchievements: (param) => dispatch({ type: 'ACHIEVEMENTS/SET', payload: param }),
    setLoading: (param) => dispatch({ type: 'LOADING/SET', payload: param })
  })
)(SkillCheck);
