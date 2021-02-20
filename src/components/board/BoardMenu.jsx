import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import LinkButton from '../common/LinkButton';

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

const BoardMenu = ({ menus, currentLocation }) => {
  return (
    <BoardMenuBlock>
      <BoardMenuList>
        {menus.map((menu) =>
          currentLocation === menu.url ? (
            <BoardMenuItem key={menu.url}>
              <SelectedLinkButton to={`/boards${menu.url}`}>
                {menu.name}
              </SelectedLinkButton>
            </BoardMenuItem>
          ) : (
            <BoardMenuItem key={menu.url}>
              <LinkButton to={`/boards${menu.url}`}>{menu.name}</LinkButton>
            </BoardMenuItem>
          ),
        )}
      </BoardMenuList>
    </BoardMenuBlock>
  );
};

export default BoardMenu;
