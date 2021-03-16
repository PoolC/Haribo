import React from 'react';
import { SelectedLinkButton } from '../../../styles/common/Button.styles';
import {
  MenuBlock,
  MenuItem,
  MenuList,
} from '../../../styles/common/Menu.styles';
import LinkButton from '../../common/Buttons/LinkButton';

const BoardMenu = ({ menus, selectedMenu, setSelectedMenu }) => {
  const onSelectMenu = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <MenuBlock>
      <MenuList>
        {menus.map((menu) =>
          selectedMenu?.urlPath === menu.urlPath ? (
            <MenuItem key={menu.urlPath}>
              <SelectedLinkButton to={`/boards/${menu.urlPath}?page=1`}>
                {menu.name}
              </SelectedLinkButton>
            </MenuItem>
          ) : (
            <MenuItem key={menu.urlPath}>
              <LinkButton
                onClick={() => {
                  onSelectMenu(menu);
                }}
                to={`/boards/${menu.urlPath}?page=1`}
              >
                {menu.name}
              </LinkButton>
            </MenuItem>
          ),
        )}
      </MenuList>
    </MenuBlock>
  );
};

export default BoardMenu;
