import React, { useEffect, useState } from 'react';
import logoImage from '../../resources/poolc.icon.transparent.png';
import { Link } from 'react-router-dom';
import { BarsIcon, HeaderBlock, HeaderIcons, LogoImage } from './Header.styles';
import Menus from './Menus/Menus';

const Header = ({ member, applyURL, selected, onLogout }) => {
  const {
    status: { isLogin },
    user: { isAdmin },
  } = member;

  const [menuVisible, setMenuVisible] = useState(false);

  const onToggleMenu = () => {
    setMenuVisible((menuVisible) => !menuVisible);
  };

  return (
    <HeaderBlock>
      <HeaderIcons>
        <Link to="/">
          <LogoImage src={logoImage} alt="logo" />
        </Link>
        <BarsIcon onClick={onToggleMenu} className="fas fa-bars"></BarsIcon>
      </HeaderIcons>
      <Menus
        onToggleMenu={onToggleMenu}
        menuVisible={menuVisible}
        selected={selected}
        isLogin={isLogin}
        isAdmin={isAdmin}
        onLogout={onLogout}
      />
    </HeaderBlock>
  );
};

export default Header;
