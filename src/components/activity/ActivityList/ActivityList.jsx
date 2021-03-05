import { MENU } from '../../../constants/menus';
import ActionButton from '../../common/Buttons/ActionButton';
import ActivityCard from '../ActivityCard/ActivityCard';
import React from 'react';
import {
  ActivityListHeader,
  ActivityListTitle,
  Description,
  List,
} from './ActivityList.styles';
import { Block, WhiteNarrowBlock } from '../../../styles/common/Block.styles';

const ActivityList = ({ activities, onToggleRegisterActivity, member }) => {
  const {
    status: { isLogin },
    user: { memberId },
  } = member;

  return (
    <>
      <Block>
        <WhiteNarrowBlock>
          <ActivityListHeader>
            <ActivityListTitle>세미나&스터디</ActivityListTitle>
            {isLogin && (
              <ActionButton to={`/${MENU.ACTIVITY}/new`}>개설</ActionButton>
            )}
          </ActivityListHeader>
          <Description>상세 내용을 보려면 각 제목을 클릭해주세요.</Description>
          <List>
            {activities.map((activity) => (
              <ActivityCard
                onToggleRegisterActivity={onToggleRegisterActivity}
                key={activity.id}
                activity={activity}
                isLogin={isLogin}
                memberId={memberId}
              />
            ))}
          </List>
        </WhiteNarrowBlock>
      </Block>
    </>
  );
};

export default ActivityList;
