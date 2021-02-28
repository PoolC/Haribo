import React from 'react';
import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import LinkButton from '../../common/Buttons/LinkButton';

const BoardMenuBlock = styled.div`
  width: 12rem;
  margin: 0 20px 20px 0;
  padding: 0;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const BoardMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.035);
  border-radius: 50px;
  padding: 30px 30px;
  margin: 0;
  @media (max-width: 576px) {
    align-items: center;
  }
`;

const BoardMenuItem = styled.li`
  height: 2.5rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
`;

const SelectedLinkButton = styled(LinkButton)`
  color: ${colors.brown[1]};
`;

const BoardMenu = ({ menus, currentLocation, onSelectMenu }) => {
  const handleSelectMenu = (menu) => {
    onSelectMenu(menu);
  };

  return (
    <BoardMenuBlock>
      <BoardMenuList>
        {menus.map((menu) =>
          currentLocation.urlPath === menu.urlPath ? (
            <BoardMenuItem key={menu.urlPath}>
              <SelectedLinkButton
                onClick={handleSelectMenu(menu)}
                to={`/boards/${menu}`}
              >
                {menu.name}
              </SelectedLinkButton>
            </BoardMenuItem>
          ) : (
            <BoardMenuItem key={menu.urlPath}>
              <LinkButton
                onClick={() => handleSelectMenu(menu)}
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
