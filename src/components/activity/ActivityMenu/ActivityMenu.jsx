import LinkButton from '../../common/Buttons/LinkButton';
import React from 'react';
import { SelectedLinkButton } from './ActivityMenu.styles';
import {
  MenuBlock,
  MenuItem,
  MenuList,
} from '../../../styles/common/Menu.styles';

const ActivityMenu = ({ semesters, currentLocation }) => {
  return (
    <MenuBlock>
      <MenuList>
        {semesters.map((semester) =>
          currentLocation === semester ? (
            <MenuItem key={semester}>
              <SelectedLinkButton to={`/activities?semester=${semester}`}>
                {semester}
              </SelectedLinkButton>
            </MenuItem>
          ) : (
            <MenuItem key={semester}>
              <LinkButton to={`/activities?semester=${semester}`}>
                {semester}
              </LinkButton>
            </MenuItem>
          ),
        )}
      </MenuList>
    </MenuBlock>
  );
};

export default ActivityMenu;
