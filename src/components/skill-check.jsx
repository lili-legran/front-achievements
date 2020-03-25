import React from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import ErrorPage from './body/error-page/error-page'
import './skill-check.scss';
import HeaderBox from './header/header-box/header-box';
import AchievementsBox from './body/achievements-box/achievements-box';
import SignUp from './header/sign-up/sign-up';

class SkillCheck extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='skill-check'>
          <Route component={ HeaderBox } />
          <Switch>
            <Route exact path="/">
              <Redirect to="/javascript" />
            </Route>
            <Route path={ ['/html', '/css', '/javascript'] } render={ (props) =>
              <AchievementsBox {...props}/>
             }/>
            <Route path={'/signup'} component={ SignUp } />
            <Route component={ ErrorPage } />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default SkillCheck;