import React from 'react';
import LinkButton from '../../common/Buttons/LinkButton';
import { BoardMenuBlock, BoardMenuItem, BoardMenuList, SelectedLinkButton } from './BoardMenu.styles';

const BoardMenu = ({ menus, currentLocation, setSelectedMenu }) => {
  const onSelectMenu = (menu) => {
    console.log(menu);
    setSelectedMenu(menu);
  };

  return (
    <BoardMenuBlock>
      <BoardMenuList>
        {menus.map((menu) =>
          currentLocation === menu.urlPath ? (
            <BoardMenuItem key={menu.urlPath}>
              <SelectedLinkButton to={`/boards/${menu.urlPath}`}>
                {menu.name}
              </SelectedLinkButton>
            </BoardMenuItem>
          ) : (
            <BoardMenuItem key={menu.urlPath}>
              <LinkButton
                onClick={() => {
                  onSelectMenu(menu);
                }}
                to={`/boards/${menu.urlPath}`}
              >
                {menu.name}
              </LinkButton>
            </BoardMenuItem>
          ),
        )}
      </BoardMenuList>
    </BoardMenuBlock>
  );
};

export default BoardMenu;
