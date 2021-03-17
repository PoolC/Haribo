import { MENU } from '../../../constants/menus';
import ActionButton from '../../common/Buttons/ActionButton';
import ActivityCard from '../ActivityCard/ActivityCard';
import React from 'react';
import {
  ActivityBlock,
  ActivityListHeader,
  ActivityListTitle,
  Description,
  List,
  NoResult,
} from './ActivityList.styles';
import { WhiteNarrowBlock } from '../../../styles/common/Block.styles';

const ActivityList = ({
  activities,
  onToggleRegisterActivity,
  onDeleteActivity,
  member,
}) => {
  const {
    status: { isLogin },
    user: { memberId },
  } = member;

  return (
    <>
      <ActivityBlock>
        <WhiteNarrowBlock>
          <ActivityListHeader>
            <ActivityListTitle>세미나&스터디</ActivityListTitle>
            {isLogin && (
              <ActionButton to={`/${MENU.ACTIVITY}/new`}>개설</ActionButton>
            )}
          </ActivityListHeader>
          <Description>상세 내용을 보려면 각 제목을 클릭해주세요.</Description>
          <List>
            {activities.length === 0 && (
              <NoResult>
                해당 학기의 세미나 및 스터디가 존재하지 않습니다.
              </NoResult>
            )}
            {activities.map((activity) => (
              <ActivityCard
                onToggleRegisterActivity={onToggleRegisterActivity}
                onDeleteActivity={onDeleteActivity}
                key={activity.id}
                activity={activity}
                isLogin={isLogin}
                memberId={memberId}
              />
            ))}
          </List>
        </WhiteNarrowBlock>
      </ActivityBlock>
    </>
  );
};

export default ActivityList;
