import React from 'react';
import styled from 'styled-components';
import logoImage from '../../resources/poolc.icon.transparent.png';
import { Link } from 'react-router-dom';
import colors from '../../lib/styles/colors';
import LinkButton from '../common/Buttons/LinkButton';
import ActionButton from '../common/Buttons/ActionButton';

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 5% 20px 5%;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  margin-bottom: 0px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 40px;
    background-color: ${colors.gray[0]};
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 20px ${colors.gray[1]};
  }
`;

const HeaderIcons = styled.div`
  color: ${colors.brown[0]};
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }
`;

const LogoImage = styled.img`
  height: auto;
  width: auto;
  max-width: 20px;
  cursor: pointer;
  margin-right: 10px;
`;

const BarsIcon = styled.i`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
  &:hover {
    color: ${colors.brown[1]};
  }
`;

const Menus = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    z-index: 10;
  }
`;

const LeftHeaderMenu = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RightHeaderMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SelectedLinkButton = styled(LinkButton)`
  color: ${colors.brown[1]};
`;

const Header = ({ member, applyURL, selected }) => {
  const isAdmin = member?.isAdmin;

  return (
    <HeaderBlock>
      <HeaderIcons>
        <Link to="/">
          <LogoImage src={logoImage} alt="logo" />
        </Link>
        <BarsIcon className="fas fa-bars"></BarsIcon>
      </HeaderIcons>
      <Menus>
        <LeftHeaderMenu>
          {selected === 'intro' ? (
            <SelectedLinkButton to="/intro">PoolC</SelectedLinkButton>
          ) : (
            <LinkButton to="/intro">PoolC</LinkButton>
          )}
          {member &&
            (selected === 'members' ? (
              <SelectedLinkButton to="/members">Members</SelectedLinkButton>
            ) : (
              <LinkButton to="/members">Members</LinkButton>
            ))}
          {selected === 'board' ? (
            <SelectedLinkButton to="/boards/notice">Boards</SelectedLinkButton>
          ) : (
            <LinkButton to="/boards/notice">Boards</LinkButton>
          )}
          {selected === 'projects' ? (
            <SelectedLinkButton to="/projects">Projects</SelectedLinkButton>
          ) : (
            <LinkButton to="/projects">Projects</LinkButton>
          )}
          {selected === 'activities' ? (
            <SelectedLinkButton to="/activities">Seminars</SelectedLinkButton>
          ) : (
            <LinkButton to="/activities">Seminars</LinkButton>
          )}
          {selected === 'books' ? (
            <SelectedLinkButton to="/books">Books</SelectedLinkButton>
          ) : (
            <LinkButton to="/books">Books</LinkButton>
          )}
          {!member &&
            (selected === 'apply' ? (
              <SelectedLinkButton to="/apply">Apply</SelectedLinkButton>
            ) : (
              <LinkButton to="/apply">Apply</LinkButton>
            ))}
        </LeftHeaderMenu>
        <RightHeaderMenu>
          {member &&
            isAdmin &&
            (selected === 'admin' ? (
              <SelectedLinkButton to="/admin">Admin</SelectedLinkButton>
            ) : (
              <LinkButton to="/admin">Admin</LinkButton>
            ))}
          {member &&
            (selected === 'my-info' ? (
              <SelectedLinkButton to="/my-info">My Info</SelectedLinkButton>
            ) : (
              <LinkButton to="/my-info">My Info</LinkButton>
            ))}
          {!member &&
            (selected === 'register' ? (
              <SelectedLinkButton to="/register">Sign Up</SelectedLinkButton>
            ) : (
              <LinkButton to="/register">Sign Up</LinkButton>
            ))}
          {!member && <ActionButton to="/login">Sign In</ActionButton>}
          {member && <ActionButton>Sign Out</ActionButton>}
        </RightHeaderMenu>
      </Menus>
    </HeaderBlock>
  );
};

export default Header;
