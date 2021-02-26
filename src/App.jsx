import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MENU } from './constants/menus';
import FooterContainer from './containers/footer/FooterContainer';
import HeaderContainer from './containers/header/HeaderContainer';
import ActivityAdminPage from './pages/activity/ActivityAdminPage';
import ActivityAttendancePage from './pages/activity/ActivityAttendancePage';
import ActivityDetailPage from './pages/activity/ActivityDetailPage';
import ActivityListPage from './pages/activity/ActivityListPage';
import ApplyPage from './pages/apply/ApplyPage';
import LoginPage from './pages/auth/LoginPage';
import MyInfoPage from './pages/auth/MyInfoPage';
import RegisterPage from './pages/auth/RegisterPage';
import BoardPage from './pages/board/BoardPage';
import BookListPage from './pages/book/BookListPage';
import HomePage from './pages/home/HomePage';
import IntroPage from './pages/intro/IntroPage';
import MemberDetailPage from './pages/member/MemberDetailPage';
import MemberListPage from './pages/member/MemberListPage';
import ProjectDetailPage from './pages/project/ProjectDetailPage';
import ProjectListPage from './pages/project/ProjectListPage';
import AdminHomePage from './pages/admin/AdminHomePage';
import PostWritePage from './pages/post/PostWritePage';
import PostPage from './pages/post/PostPage';
import NotFoundPage from './pages/error/NotFoundPage';

function App() {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={IntroPage} path={`/${MENU.INTRO}`} />
        <Route component={MemberListPage} path={`/${MENU.MEMBERS}`} />
        <Route
          component={MemberDetailPage}
          path={`/${MENU.MEMBER}/:memberId`}
        />
        <Route component={PostWritePage} path={`/${MENU.POST}/new`} exact />
        <Route component={PostPage} path={`/${MENU.POST}/:postId`} />
        <Route
          component={BoardPage}
          path={[`/${MENU.BOARDS}`, `/${MENU.BOARDS}/notice`]}
        />
        <Route component={ProjectListPage} path={`/${MENU.PROJECTS}`} />
        <Route
          component={ProjectDetailPage}
          path={`/${MENU.PROJECT}/:projectId`}
        />
        <Route component={ActivityListPage} path={`/${MENU.ACTIVITIES}`} />
        <Route
          component={ActivityAttendancePage}
          path={[
            `/${MENU.ACTIVITY}/:activityId/attendance`,
            `/${MENU.ACTIVITY}/:activityId/attendance/:session`,
          ]}
        />
        <Route
          component={ActivityAdminPage}
          path={[
            `/${MENU.ACTIVITY}/create/:activityId`,
            `/${MENU.ACTIVITY}/create`,
          ]}
        />
        <Route
          component={ActivityDetailPage}
          path={`/${MENU.ACTIVITY}/:activityId`}
          exact
        />
        <Route component={BookListPage} path={`/${MENU.BOOKS}`} />
        <Route component={LoginPage} path={`/${MENU.SIGNIN}`} />
        <Route component={RegisterPage} path={`/${MENU.SIGNUP}`} />
        <Route component={ApplyPage} path={`/${MENU.APPLY}`} />
        <Route component={AdminHomePage} path={`/${MENU.ADMIN}`} />
        <Route component={MyInfoPage} path={`/${MENU.MYINFO}`} />
        <Route component={NotFoundPage} path="/" />
      </Switch>
      <FooterContainer />
    </>
  );
}

export default App;
