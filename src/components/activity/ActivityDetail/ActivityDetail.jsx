import MemberCard from '../../members/MemberCard/MemberCard';
import React from 'react';
import { Viewer } from '@toast-ui/react-editor';

import SessionContainer from '../../../containers/activity/SessionContainer/SessionContainer';
import {
  TagCard,
  TitleContainer,
  Title,
  ContentContainer,
  Content,
  TagContainer,
  TagList,
  PlanContainer,
  MemberContainer,
  Member,
  SessionBlock,
  Sessions,
  PlanContents,
} from './ActivityDetail.styles.js';
import { Block, WhiteBlock } from '../../../styles/common/Block.styles';
import {
  FileContainer,
  FileContainerTitle,
} from '../../board/PostForm/PostForm.styles';

const Tag = ({ tag }) => {
  return <TagCard>#{tag}</TagCard>;
};

const ActivityDetail = ({
  activity,
  activityMembers,
  activitySessions,
  member,
}) => {
  const {
    status: { isLogin },
  } = member;

  const {
    id,
    title,
    host,
    startDate,
    classHour,
    seminar,
    capacity,
    hour,
    tags,
    description,
    files,
  } = activity;
  return (
    <Block>
      <WhiteBlock>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <ContentContainer>
          <h2>{seminar ? '세미나장' : '스터디장'}</h2>
          <Content>{host.name}</Content>
        </ContentContainer>
        <ContentContainer>
          <h2>시작일</h2>
          <Content>{startDate}</Content>
        </ContentContainer>
        <ContentContainer>
          <h2>시간</h2>
          <Content>{classHour}</Content>
          <Content>{hour}시간씩 진행</Content>
        </ContentContainer>
        <ContentContainer>
          <h2>정원</h2>
          <Content>
            {isLogin && `${activityMembers?.length}명/`}
            {capacity}명
          </Content>
        </ContentContainer>
        <TagContainer>
          <h2>태그</h2>
          <TagList>
            {tags.map((tag) => (
              <Tag key={tag.name} tag={tag.name} />
            ))}
          </TagList>
        </TagContainer>
        <PlanContainer>
          <h2 className="title">계획서</h2>
          <PlanContents>
            <Viewer initialValue={description} />
          </PlanContents>
          <FileContainerTitle>첨부된 파일 목록</FileContainerTitle>
          <FileContainer>{files ? files : '첨부된 파일 없음'}</FileContainer>
        </PlanContainer>
        {isLogin && (
          <MemberContainer>
            <h2>참여 멤버</h2>
            <Member>
              {activityMembers?.map((member) => (
                <MemberCard key={member.loginID} member={member} />
              ))}
            </Member>
          </MemberContainer>
        )}
        <SessionBlock>
          <h2>회차 정보</h2>
          <Sessions>
            {activitySessions.map((session) => (
              <SessionContainer
                key={session.id}
                session={session}
                activityID={id}
                host={host}
              />
            ))}
          </Sessions>
        </SessionBlock>
      </WhiteBlock>
    </Block>
  );
};

export default ActivityDetail;
