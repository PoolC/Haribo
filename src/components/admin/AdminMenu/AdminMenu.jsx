import React from 'react';
import styled from 'styled-components';
import { MENU } from '../../../constants/menus';
import colors from '../../../lib/styles/colors';
import LinkButton from '../../common/Buttons/LinkButton';

const AdminMenuBlock = styled.div`
  width: 12rem;
  margin: 0 20px 20px 0;
  padding: 0;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const AdminMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.035);
  border-radius: 50px;
  padding: 30px 30px;
  margin: 0;
  @media (max-width: 1000px) {
    align-items: center;
  }
`;

const AdminMenuItem = styled.li`
  height: 2.5rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
`;

const SelectedLinkButton = styled(LinkButton)`
  color: ${colors.brown[1]};
`;

const AdminMenu = ({ menus, currentLocation }) => {
  return (
    <AdminMenuBlock>
      <AdminMenuList>
        {menus.map((menu) =>
          currentLocation === menu.url ? (
            <AdminMenuItem key={menu.url}>
              <SelectedLinkButton to={`/${MENU.ADMIN}${menu.url}`}>
                {menu.name}
              </SelectedLinkButton>
            </AdminMenuItem>
          ) : (
            <AdminMenuItem key={menu.url}>
              <LinkButton to={`/${MENU.ADMIN}${menu.url}`}>
                {menu.name}
              </LinkButton>
            </AdminMenuItem>
          ),
        )}
      </AdminMenuList>
    </AdminMenuBlock>
  );
};

export default AdminMenu;
