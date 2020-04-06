/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Route,
  BrowserRouter,
  Redirect,
  Switch
} from 'react-router-dom';
import ErrorPage from './body/error-page/error-page';
import HeaderBox from './header/header-box/header-box';
import AchievementsBox from './body/achievements-box/achievements-box';
import SignUpForm from './body/sign-up-form/sign-up-form';
import SignInForm from './body/sign-in-form/sign-in-form';
import Loading from './loading/loading';
import './skill-check.scss';

const SkillCheck = () => (
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
    {/* <Loading /> */}
  </BrowserRouter>
);

export default SkillCheck;
