import React, { useEffect, useState } from 'react';
import ActionButton from '../../common/Buttons/ActionButton';
import LinkButton from '../../common/Buttons/LinkButton';
import {
  MenuBlock,
  LeftHeaderMenu,
  SelectedLinkButton,
  RightHeaderMenu,
} from './Menus.styles';

const Menus = ({
  menuVisible,
  selected,
  isLogin,
  isAdmin,
  onLogout,
  onToggleMenu,
}) => {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(menuVisible);

  useEffect(() => {
    if (localVisible && !menuVisible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(menuVisible);
  }, [localVisible, menuVisible]);

  const handleLogout = () => {
    onToggleMenu();
    onLogout();
  };

  return (
    <MenuBlock disappear={!menuVisible} animate={animate}>
      <LeftHeaderMenu disappear={!menuVisible}>
        {selected === 'intro' ? (
          <SelectedLinkButton onClick={onToggleMenu} to="/intro">
            PoolC
          </SelectedLinkButton>
        ) : (
          <LinkButton onClick={onToggleMenu} to="/intro">
            PoolC
          </LinkButton>
        )}
        {isLogin &&
          (selected === 'members' ? (
            <SelectedLinkButton onClick={onToggleMenu} to="/members">
              Members
            </SelectedLinkButton>
          ) : (
            <LinkButton onClick={onToggleMenu} to="/members">
              Members
            </LinkButton>
          ))}
        {selected === 'board' ? (
          <SelectedLinkButton onClick={onToggleMenu} to="/boards/notice">
            Boards
          </SelectedLinkButton>
        ) : (
          <LinkButton onClick={onToggleMenu} to="/boards/notice">
            Boards
          </LinkButton>
        )}
        {selected === 'projects' ? (
          <SelectedLinkButton onClick={onToggleMenu} to="/projects">
            Projects
          </SelectedLinkButton>
        ) : (
          <LinkButton onClick={onToggleMenu} to="/projects">
            Projects
          </LinkButton>
        )}
        {selected === 'activities' ? (
          <SelectedLinkButton onClick={onToggleMenu} to="/activities">
            Seminars
          </SelectedLinkButton>
        ) : (
          <LinkButton onClick={onToggleMenu} to="/activities">
            Seminars
          </LinkButton>
        )}
        {selected === 'books' ? (
          <SelectedLinkButton onClick={onToggleMenu} to="/books">
            Books
          </SelectedLinkButton>
        ) : (
          <LinkButton onClick={onToggleMenu} to="/books">
            Books
          </LinkButton>
        )}
        {!isLogin &&
          (selected === 'apply' ? (
            <SelectedLinkButton onClick={onToggleMenu} to="/apply">
              Apply
            </SelectedLinkButton>
          ) : (
            <LinkButton onClick={onToggleMenu} to="/apply">
              Apply
            </LinkButton>
          ))}
      </LeftHeaderMenu>
      <RightHeaderMenu disappear={!menuVisible}>
        {isLogin &&
          isAdmin &&
          (selected === 'admin' ? (
            <SelectedLinkButton onClick={onToggleMenu} to="/admin">
              Admin
            </SelectedLinkButton>
          ) : (
            <LinkButton onClick={onToggleMenu} to="/admin">
              Admin
            </LinkButton>
          ))}
        {isLogin &&
          (selected === 'my-info' ? (
            <SelectedLinkButton onClick={onToggleMenu} to="/my-info">
              My Info
            </SelectedLinkButton>
          ) : (
            <LinkButton onClick={onToggleMenu} to="/my-info">
              My Info
            </LinkButton>
          ))}
        {!isLogin &&
          (selected === 'register' ? (
            <SelectedLinkButton onClick={onToggleMenu} to="/register">
              Sign Up
            </SelectedLinkButton>
          ) : (
            <LinkButton onClick={onToggleMenu} to="/register">
              Sign Up
            </LinkButton>
          ))}
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
