import colors from '../../../lib/styles/colors';
import MemberCard from '../../members/MemberCard/MemberCard';
import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import SessionContainer from '../../../containers/activity/SessionContainer/SessionContainer';

const ActivityDetailBlock = styled.div`
  position: relative;
  top: 0px;
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  margin: 0px 0 300px 0;
  @media (max-width: 576px) {
    margin-bottom: 500px;
  }
`;

const ActivityDetailContainer = styled.div`
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  border-radius: 50px;
  padding: 80px 10px 80px 10px;
  & > .project_container_title {
    font-weight: 700;
    margin-bottom: 30px;
    max-width: 1200px;
  }
`;

const TitleContainer = styled.div`
  margin: 0px 0 40px 0;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  h2 {
    color: ${colors.brown[0]};
    margin-bottom: 10px;
    font-weight: 300;
    font-size: 0.8rem;
  }
`;

const Content = styled.p`
  margin-bottom: 0.5rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  h2 {
    color: ${colors.brown[0]};
    margin-bottom: 10px;
    font-weight: 300;
    font-size: 0.8rem;
  }
`;

const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  h2 {
    color: ${colors.brown[0]};
    margin-bottom: 10px;
    font-weight: 300;
    font-size: 0.8rem;
  }
`;

const MemberContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  h2 {
    color: ${colors.brown[0]};
    margin-bottom: 10px;
    font-weight: 300;
    font-size: 0.8rem;
  }
`;

const Member = styled.ul`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: scroll;
  scrollbar-color: none;
  margin: 0;
  list-style: none;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const SessionBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  h2 {
    color: ${colors.brown[0]};
    margin-bottom: 0px;
    font-weight: 300;
    font-size: 0.8rem;
  }
`;

const Sessions = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const TagList = styled.ul`
  display: flex;
`;

const TagCard = styled.li`
  cursor: default;
  background-color: ${colors.gray[0]};
  border: 1px solid ${colors.mint[1]};
  border-radius: 2px;
  font-size: 0.9rem;
  font-weight: 300;
  padding: 2px;
  margin: 5px;
  list-style: none;
`;

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
  } = activity;
  return (
    <ActivityDetailBlock>
      <ActivityDetailContainer>
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
            {activityMembers.length}명/{capacity}명
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
          <h2>계획서</h2>
          <ReactMarkdown plugins={[gfm]} source={description} />
        </PlanContainer>
        {isLogin && (
          <MemberContainer>
            <h2>참여 멤버</h2>
            <Member>
              {activityMembers.map((member) => (
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
      </ActivityDetailContainer>
    </ActivityDetailBlock>
  );
};

export default ActivityDetail;
