import LinkButton from '../../common/Buttons/LinkButton';
import React from 'react';
import { ActivityMenuBlock, ActivityMenuItem, ActivityMenuList, SelectedLinkButton } from './ActivityMenu.styles';

const ActivityMenu = ({ semesters, currentLocation }) => {
  return (
    <ActivityMenuBlock>
      <ActivityMenuList>
        {semesters.map((semester) =>
          currentLocation === semester ? (
            <ActivityMenuItem key={semester}>
              <SelectedLinkButton to={`/activities?semester=${semester}`}>
                {semester}
              </SelectedLinkButton>
            </ActivityMenuItem>
          ) : (
            <ActivityMenuItem key={semester}>
              <LinkButton to={`/activities?semester=${semester}`}>
                {semester}
              </LinkButton>
            </ActivityMenuItem>
          ),
        )}
      </ActivityMenuList>
    </ActivityMenuBlock>
  );
};

export default ActivityMenu;
