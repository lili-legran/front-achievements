import React from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import ErrorPage from './body/error-page/error-page'
import './skill-check.scss';
import HeaderBox from './header/header-box/header-box';
import AchievementsBox from './body/achievements-box/achievements-box';

class SkillCheck extends React.Component {
  state = {
    activeLanguage: 'javascript'
  }

  selectLanguage = (value) => {
    this.setState({
      activeLanguage: value
    }, () => { console.log(value) });
  }

  render() {
    const {activeLanguage} = this.state;
    // const showLanguagesOnHeader = activePage === 'html' || activePage === 'css' || activePage === 'javascript'; 
    return (
      <BrowserRouter>
        <div className='skill-check'> 
          <HeaderBox selectLanguage={this.selectLanguage} activeLanguage={ activeLanguage }/>
          <Switch>
            <Route exact path="/">
              {/* {loggedIn ? <Redirect to="/javascript" /> : <PublicHomePage />} */}
              <Redirect to="/javascript" />
            </Route>
            <Route path={ ['/html', '/css', '/javascript'] } render={ () =>
              <AchievementsBox activeLanguage={ this.state.activeLanguage } selectLanguage={this.selectLanguage}/>
             }/>
            {/* <Route path={'/login'} component={ LoginPage } /> */}
            <Route component={ ErrorPage } />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default SkillCheck;