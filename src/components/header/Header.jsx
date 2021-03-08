import React, { useState } from 'react';
import logoImage from '../../resources/poolc.icon.transparent.png';
import { Link } from 'react-router-dom';
import { BarsIcon, HeaderBlock, HeaderIcons, LogoImage } from './Header.styles';
import Menus from './Menus/Menus';

const Header = ({ member, onLogout }) => {
  const {
    status: { isLogin },
    user: { isAdmin },
  } = member;

  const [menuVisible, setMenuVisible] = useState(false);

  const onToggleMenu = () => {
    setMenuVisible((menuVisible) => !menuVisible);
  };

  const onCloseMenu = () => {
    setMenuVisible((menuVisible) => false);
  };

  return (
    <HeaderBlock>
      <HeaderIcons>
        <Link to="/">
          <LogoImage src={logoImage} alt="logo" onClick={onCloseMenu} />
        </Link>
        <BarsIcon onClick={onToggleMenu} className="fas fa-bars"></BarsIcon>
      </HeaderIcons>
      <Menus
        menuVisible={menuVisible}
        onToggleMenu={onToggleMenu}
        isLogin={isLogin}
        isAdmin={isAdmin}
        onLogout={onLogout}
      />
    </HeaderBlock>
  );
};

export default Header;
