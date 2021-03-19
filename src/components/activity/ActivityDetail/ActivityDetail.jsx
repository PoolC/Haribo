import MemberCard from '../../members/MemberCard/MemberCard';
import React, { useState } from 'react';
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
  ButtonContainer,
  StyledButton,
} from './ActivityDetail.styles.js';
import { Block, WhiteBlock } from '../../../styles/common/Block.styles';
import {
  File,
  FileContainer,
  FileContainerTitle,
} from '../../board/PostForm/PostForm.styles';
import getFileUrl from '../../../lib/utils/getFileUrl';
import { FullText } from '../ActivityCard/ActivityCard.styles';
import ActivityRegisterModalContainer from '../../../containers/activity/ActivityModalContainer/ActivityRegisterModalContainer';

const Tag = ({ tag }) => {
  return <TagCard>#{tag}</TagCard>;
};

const ActivityDetail = ({
  activity,
  activityMembers,
  activitySessions,
  member,
  onToggleRegisterActivity,
}) => {
  const {
    status: { isLogin },
    user: { memberId },
  } = member;

  const [members, setMembers] = useState(activity.memberLoginIds);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);

  const {
    id,
    title,
    host,
    startDate,
    classHour,
    seminar,
    capacity,
    hour,
    available,
    tags,
    description,
    fileList,
  } = activity;

  const handleRegisterModalOpen = () => {
    setRegisterModalVisible(true);
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    onToggleRegisterActivity(id, members, setMembers);
    setRegisterModalVisible(false);
  };

  const handleRegisterCancel = () => {
    setRegisterModalVisible(false);
  };

  return (
    <>
      <ActivityRegisterModalContainer
        visible={registerModalVisible}
        activityTitle={title}
        onConfirm={handleConfirm}
        onCancel={handleRegisterCancel}
        isRegister={!members.includes(memberId)}
      />
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
          {available && isLogin && (
            <ButtonContainer>
              {available &&
                memberId !== host.loginID &&
                !members.includes(memberId) &&
                members.length < capacity && (
                  <StyledButton onClick={handleRegisterModalOpen}>
                    신청
                  </StyledButton>
                )}
              {available &&
                memberId !== host.loginID &&
                !members.includes(memberId) &&
                members.length >= capacity && <FullText>[정원 마감]</FullText>}
              {available &&
                memberId !== host.loginID &&
                members.includes(memberId) && (
                  <StyledButton onClick={handleRegisterModalOpen}>
                    신청 취소
                  </StyledButton>
                )}
            </ButtonContainer>
          )}
          <PlanContainer>
            <h2 className="title">계획서</h2>
            <PlanContents>
              <Viewer initialValue={description} />
            </PlanContents>
            <FileContainerTitle>첨부된 파일 목록</FileContainerTitle>
            <FileContainer>
              {fileList?.length !== 0
                ? fileList?.map((file) => (
                    <File key={file}>
                      <a href={getFileUrl(file)}>{getFileUrl(file)}</a>
                    </File>
                  ))
                : '첨부된 파일 없음'}
            </FileContainer>
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
    </>
  );
};

export default ActivityDetail;
