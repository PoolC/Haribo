import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import ActivityListPage from './pages/ActivityListPage';
import AdminHomePage from './pages/admin/AdminHomePage';
import BoardPage from './pages/BoardPage';
import BookListPage from './pages/BookListPage';
import HomePage from './pages/HomePage';
import IntroPage from './pages/IntroPage';
import LoginPage from './pages/LoginPage';
import MemberListPage from './pages/MemberListPage';
import MyInfoPage from './pages/MyInfoPage';
import ProjectListPage from './pages/ProjectListPage';
import RegisterPage from './pages/RegisterPage';
import ApplyPage from './pages/ApplyPage';
import HeaderContainer from './containers/header/HeaderContainer';
import FooterContainer from './containers/footer/FooterContainer';
import { MENU } from './constants/menus';

function App() {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={IntroPage} path={`/${MENU.INTRO}`} />
        <Route component={MemberListPage} path={`/${MENU.MEMBERS}`} />
        <Route
          component={BoardPage}
          path={[`/${MENU.BOARDS}`, `/${MENU.BOARDS}/notice`]}
        />
        <Route component={ProjectListPage} path={`/${MENU.PROJECTS}`} />
        <Route component={ActivityListPage} path={`/${MENU.ACTIVITIES}`} />
        <Route component={BookListPage} path={`/${MENU.BOOKS}`} />
        <Route component={LoginPage} path={`/${MENU.SIGNIN}`} />
        <Route component={RegisterPage} path={`/${MENU.SIGNUP}`} />
        <Route component={ApplyPage} path={`/${MENU.APPLY}`} />
        <Route component={AdminHomePage} path={`/${MENU.ADMIN}`} />
        <Route component={MyInfoPage} path={`/${MENU.MYINFO}`} />
      </Switch>
      <FooterContainer />
    </>
  );
}

export default App;
