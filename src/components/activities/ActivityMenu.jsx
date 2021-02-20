import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import LinkButton from '../common/LinkButton';

const ActivityMenuBlock = styled.div`
  width: 15rem;
  margin: 0 10px 20px 0;
  padding: 0;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const ActivityMenuList = styled.ul`
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

const ActivityMenuItem = styled.li`
  height: 2.5rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
`;

const SelectedLinkButton = styled(LinkButton)`
  color: ${colors.brown[1]};
`;

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
