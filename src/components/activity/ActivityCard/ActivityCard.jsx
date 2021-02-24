import { MENU } from '../../../constants/menus';
import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ActivityCardBlock = styled.li`
  list-style: none;
  margin: 10px 5px;
`;

const ActivityCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.mint[0]};
  border-radius: 20px;
  width: 260px;
  height: 200px;
  box-shadow: 0px 0px 10px ${colors.gray[1]};
  cursor: pointer;
  transition: 0.3s;
  padding: 0px 10px 0 10px;
  &:hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;

const ActivityTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
  font-weight: 600;
  font-size: 1.25rem;
  word-break: keep-all;
  text-align: center;
  line-height: 1.4rem;
  margin-top: 10px;
`;

const ActivityClassHour = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 0.8rem;
`;

const ActivityDate = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-weight: 300;
  font-size: 0.8rem;
`;

const ActivityHost = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-weight: 300;
  font-size: 0.8rem;
`;

const ActivityTags = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  flex: 2;
`;

const ActivityTag = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: ${colors.brown[0]};
  margin: 1px 3px;
  background-color: ${colors.gray[0]};
  padding: 2px 3px;
  border: 1px solid ${colors.mint[1]};
  border-radius: 2px;
`;

const ActivityButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
`;

const StyledActionButton = styled(ActionButton)`
  margin: 0 8px;
`;

const StyledLink = styled(Link)`
  color: ${colors.brown[1]};
  margin: 10px 0;
`;

const ActivityCard = ({ activity }) => {
  const {
    id,
    title,
    host,
    startDate,
    endDate,
    classHour,
    isSeminar,
    capacity,
    available,
    tags,
  } = activity;
  return (
    <ActivityCardBlock>
      <ActivityCardContainer>
        <StyledLink to={`/${MENU.ACTIVITY}/${id}`}>
          <ActivityTitle>{title}</ActivityTitle>
        </StyledLink>
        <ActivityClassHour>{classHour}</ActivityClassHour>
        <ActivityDate>{`${startDate} ~ `}</ActivityDate>
        <ActivityHost>{host}</ActivityHost>
        <ActivityTags>
          {tags.map((tag) => (
            <ActivityTag key={tag.id}>#{tag.name}</ActivityTag>
          ))}
        </ActivityTags>
        <ActivityButtons>
          <StyledActionButton to={`/${MENU.ACTIVITY}/create/${id}`}>
            관리
          </StyledActionButton>
          <StyledActionButton to={`/${MENU.ACTIVITY}/${id}/attendance`}>
            출석
          </StyledActionButton>
          {available && <StyledActionButton>신청</StyledActionButton>}
        </ActivityButtons>
      </ActivityCardContainer>
    </ActivityCardBlock>
  );
};

export default ActivityCard;
