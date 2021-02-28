import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import AdminMenu from '../../components/admin/AdminMenu/AdminMenu';
import AdminInfoContainer from '../../containers/admin/AdminInfoContainer/AdminInfoContainer';
import { MENU } from '../../constants/menus';
import AdminMemberContainer from '../../containers/admin/AdminMemberContainer/AdminMemberContainer';
import AdminPassContainer from '../../containers/admin/AdminPassContainer/AdminPassContainer';
import AdminBoardContainer from '../../containers/admin/AdminBoardContainer/AdminBoardContainer';
import AdminProjectContainer from '../../containers/admin/AdminProjectContainer/AdminProjectContainer';
import AdminActivityContainer from '../../containers/admin/AdminActivityContainer/AdminActivityContainer';
import AdminBookContainer from '../../containers/admin/AdminBookContainer/AdminBookContainer';
import AdminHome from '../../components/admin/AdminHome/AdminHome';
import AdminBoardFormContainer from '../../containers/admin/AdminBoardFormContainer/AdminBoardFormContainer';
import AdminProjectFormContainer from '../../containers/admin/AdminProjectFormContainer/AdminProjectFormContainer';
import AdminBookFormContainer from '../../containers/admin/AdminBookFormContainer/AdminBookFormContainer';

const AdminContainerBlock = styled.div`
  position: relative;
  top: 0px;
  width: 90%;
  left: 5%;
  right: 5%;
  display: flex;
  margin: 0px 0 300px 0;
  @media (max-width: 1000px) {
    margin-bottom: 600px;
    flex-direction: column;
  }
`;

const AdminPage = () => {
  const menus = [
    { name: '관리자 홈', url: '' },
    { name: '동아리 정보 관리', url: '/info' },
    { name: '회원 관리', url: '/members' },
    { name: '최소활동기준 관리', url: '/pass' },
    { name: '게시판 관리', url: '/boards' },
    { name: '프로젝트 관리', url: '/projects' },
    { name: '활동 관리', url: '/activities' },
    { name: '도서 관리', url: '/books' },
  ];
  return (
    <AdminContainerBlock>
      <AdminMenu menus={menus} />
      <Switch>
        <Route
          component={AdminInfoContainer}
          path={`/${MENU.ADMIN}/info`}
          exact
        />

        <Route
          component={AdminMemberContainer}
          path={`/${MENU.ADMIN}/members`}
          exact
        />
        <Route
          component={AdminPassContainer}
          path={`/${MENU.ADMIN}/pass`}
          exact
        />
        <Route
          component={AdminBoardFormContainer}
          path={[
            `/${MENU.ADMIN}/boards/new`,
            `/${MENU.ADMIN}/boards/edit/:boardID`,
          ]}
          exact
        />
        <Route
          component={AdminBoardContainer}
          path={`/${MENU.ADMIN}/boards`}
          exact
        />
        <Route
          component={AdminProjectFormContainer}
          path={[
            `/${MENU.ADMIN}/projects/edit/:projectID`,
            `/${MENU.ADMIN}/projects/new`,
          ]}
          exact
        />
        <Route
          component={AdminProjectContainer}
          path={`/${MENU.ADMIN}/projects`}
          exact
        />
        <Route
          component={AdminActivityContainer}
          path={`/${MENU.ADMIN}/activities`}
          exact
        />
        <Route
          component={AdminBookFormContainer}
          path={[
            `/${MENU.ADMIN}/books/new`,
            `/${MENU.ADMIN}/books/edit/:bookID`,
          ]}
          exact
        />
        <Route
          component={AdminBookContainer}
          path={`/${MENU.ADMIN}/books`}
          exact
        />
        <Route component={AdminHome} path={`/${MENU.ADMIN}`} exact />
      </Switch>
    </AdminContainerBlock>
  );
};

export default AdminPage;
