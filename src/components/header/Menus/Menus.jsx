import React from 'react';
import ActionButton from '../../common/Buttons/ActionButton';
import LinkButton from '../../common/Buttons/LinkButton';
import { MenuBlock, LeftHeaderMenu, RightHeaderMenu } from './Menus.styles';

const Menus = ({ menuVisible, isLogin, isAdmin, onLogout, onToggleMenu }) => {
  const handleLogout = () => {
    onToggleMenu();
    onLogout();
  };

  return (
    <MenuBlock className={menuVisible ? 'menus open' : 'menus'}>
      <LeftHeaderMenu>
        <LinkButton onClick={onToggleMenu} to="/intro">
          PoolC
        </LinkButton>
        {isLogin && (
          <LinkButton onClick={onToggleMenu} to="/members">
            Members
          </LinkButton>
        )}
        <LinkButton onClick={onToggleMenu} to="/boards/notice">
          Boards
        </LinkButton>
        <LinkButton onClick={onToggleMenu} to="/projects">
          Projects
        </LinkButton>
        <LinkButton onClick={onToggleMenu} to="/activities">
          Seminars
        </LinkButton>
        <LinkButton onClick={onToggleMenu} to="/books">
          Books
        </LinkButton>
        {!isLogin && (
          <LinkButton onClick={onToggleMenu} to="/apply">
            Apply
          </LinkButton>
        )}
        {isLogin && isAdmin && (
          <LinkButton className="right-menu" onClick={onToggleMenu} to="/admin">
            Admin
          </LinkButton>
        )}
        {isLogin && (
          <LinkButton
            className="right-menu"
            onClick={onToggleMenu}
            to="/my-info"
          >
            My Info
          </LinkButton>
        )}
        {!isLogin && (
          <LinkButton
            className="right-menu"
            onClick={onToggleMenu}
            to="/register"
          >
            Sign Up
          </LinkButton>
        )}
        {!isLogin && (
          <ActionButton
            className="right-menu"
            onClick={onToggleMenu}
            to="/login"
          >
            Sign In
          </ActionButton>
        )}
        {isLogin && (
          <ActionButton className="right-menu" onClick={handleLogout}>
            Sign Out
          </ActionButton>
        )}
      </LeftHeaderMenu>
      <RightHeaderMenu>
        {isLogin && isAdmin && (
          <LinkButton onClick={onToggleMenu} to="/admin">
            Admin
          </LinkButton>
        )}
        {isLogin && (
          <LinkButton onClick={onToggleMenu} to="/my-info">
            My Info
          </LinkButton>
        )}
        {!isLogin && (
          <LinkButton onClick={onToggleMenu} to="/register">
            Sign Up
          </LinkButton>
        )}
        {!isLogin && (
          <ActionButton onClick={onToggleMenu} to="/login">
            Sign In
          </ActionButton>
        )}
        {isLogin && (
          <ActionButton onClick={handleLogout}>Sign Out</ActionButton>
        )}
      </RightHeaderMenu>
    </MenuBlock>
  );
};

export default Menus;
