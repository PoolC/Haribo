import { MENU } from '../../../constants/menus';
import React, { useState } from 'react';
import ActivityModalContainer from '../../../containers/activity/ActivityModalContainer/ActivityModalContainer';
import {
  ActivityCardBlock,
  ActivityCardContainer,
  StyledLink,
  ActivityTitle,
  ActivityClassHour,
  ActivityDate,
  ActivityHost,
  ActivityTags,
  ActivityTag,
  ActivityButtons,
  StyledActionButton,
} from './ActivityCard.styles.js';

const ActivityCard = ({
  activity,
  onToggleRegisterActivity,
  isLogin,
  memberId,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleConfirm = () => {
    onToggleRegisterActivity(id);
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const {
    id,
    title,
    host,
    startDate,
    classHour,
    //capacity,
    available,
    tags,
  } = activity;
  return (
    <>
      <ActivityModalContainer
        visible={modalVisible}
        activityTitle={title}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
      <ActivityCardBlock>
        <ActivityCardContainer>
          <StyledLink to={`/${MENU.ACTIVITY}/${id}`}>
            <ActivityTitle>{title}</ActivityTitle>
          </StyledLink>
          <ActivityClassHour>{classHour}</ActivityClassHour>
          <ActivityDate>{`${startDate} ~ `}</ActivityDate>
          <ActivityHost>{host.name}</ActivityHost>
          <ActivityTags>
            {tags.map((tag) => (
              <ActivityTag key={tag.name}>#{tag.name}</ActivityTag>
            ))}
          </ActivityTags>
          {isLogin && (memberId === host.loginID || available) && (
            <ActivityButtons>
              {memberId === host.loginID && (
                <StyledActionButton to={`/${MENU.ACTIVITY}/edit/${id}`}>
                  관리
                </StyledActionButton>
              )}
              {memberId === host.loginID && (
                <StyledActionButton to={`/${MENU.ACTIVITY}/${id}/attendance`}>
                  출석
                </StyledActionButton>
              )}
              {available && (
                <StyledActionButton onClick={handleModalOpen}>
                  신청
                </StyledActionButton>
              )}
            </ActivityButtons>
          )}
        </ActivityCardContainer>
      </ActivityCardBlock>
    </>
  );
};

export default ActivityCard;
