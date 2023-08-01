import React from 'react';
import { isAuthorizedRole } from '../../../lib/utils/checkRole';
import ActionButton from '../../common/Buttons/ActionButton';
import LinkButton from '../../common/Buttons/LinkButton';
import { LeftHeaderMenu, MenuBlock, RightHeaderMenu } from './Menus.styles';
import { Avatar, Dropdown } from 'antd';

const Menus = ({ menuVisible, isLogin, role, onToggleMenu, dropDownItems }) => {
  return (
    <MenuBlock className={menuVisible ? 'menus open' : 'menus'}>
      <LeftHeaderMenu>
        <LinkButton onClick={onToggleMenu} to="/intro">
          PoolC
        </LinkButton>
        {isLogin && isAuthorizedRole(role) && (
          <LinkButton onClick={onToggleMenu} to="/members">
            Members
          </LinkButton>
        )}
        <LinkButton onClick={onToggleMenu} to="/boards/notice?page=1">
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
        {(!isLogin || (isLogin && !isAuthorizedRole(role))) && (
          <LinkButton onClick={onToggleMenu} to="/apply">
            Apply
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
            className="right-menu sign-in"
            onClick={onToggleMenu}
            to="/login"
          >
            Sign In
          </ActionButton>
        )}
      </LeftHeaderMenu>
      <RightHeaderMenu>
        {isLogin && (
          <Dropdown menu={{ items: dropDownItems }}>
            <Avatar
              src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3"
              size={36}
            />
          </Dropdown>
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
      </RightHeaderMenu>
    </MenuBlock>
  );
};

export default Menus;
