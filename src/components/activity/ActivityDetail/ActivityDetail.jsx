import { MENU } from '../../../constants/menus';
import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';
import MemberCard from '../../members/MemberCard/MemberCard';
import React from 'react';
import styled from 'styled-components';

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

const Plan = styled.p``;

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

const SessionContainer = styled.div`
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
  background-color: ${colors.gray[0]};
  border: 1px solid ${colors.mint[1]};
  border-radius: 2px;
  font-size: 0.9rem;
  font-weight: 300;
  padding: 2px;
  margin: 5px;
  list-style: none;
`;

const SessionCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 20px 0 10px 0;
  list-style: none;
`;

const SessionDivider = styled.div`
  margin-top: 30px;
  width: 50px;
  height: 1px;
  background-color: ${colors.mint[1]};
`;

const SessionNumber = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
`;

const Date = styled.p`
  font-weight: 300;
  font-size: 0.8rem;
  margin-bottom: 10px;
`;

const Description = styled.p``;

const AttendanceList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h5 {
    font-size: 0.9rem;
    margin: 10px 0;
    font-weight: 500;
  }
`;

const Attendance = styled.li`
  font-size: 0.8rem;
  margin: 2px;
  font-weight: 300;
  list-style: none;
`;

const Tag = ({ tag }) => {
  return <TagCard>#{tag}</TagCard>;
};

const Session = ({ session, memberInfo }) => {
  const { id, description, date, sessionNumber, attendances } = session;
  const { members } = attendances;
  const {
    status: { isLogin },
    user: { memberId, isAdmin },
  } = memberInfo;

  return (
    <>
      <SessionCard>
        <SessionNumber>{sessionNumber}회차</SessionNumber>
        <Date>{date}</Date>
        <Description>{description}</Description>
        {members && (
          <AttendanceList>
            <h5>[출석 인원]</h5>
            {members.map((member) => (
              <Attendance key={member.id}>{member.name}</Attendance>
            ))}
          </AttendanceList>
        )}
      </SessionCard>
      {isLogin && (
        <ActionButton
          to={`/${MENU.ACTIVITY}/${id}/attendance/${sessionNumber}`}
        >
          수정
        </ActionButton>
      )}
      <SessionDivider />
    </>
  );
};

const ActivityDetail = ({ activity, member }) => {
  const {
    status: { isLogin },
    user: { memberId, isAdmin },
  } = member;

  const {
    id,
    title,
    host,
    startDate,
    classHour,
    isSeminar,
    capacity,
    hour,
    available,
    tags,
    members,
    sessions,
    description,
  } = activity;
  return (
    <ActivityDetailBlock>
      <ActivityDetailContainer>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <ContentContainer>
          <h2>{isSeminar ? '세미나장' : '스터디장'}</h2>
          <Content>{host}</Content>
        </ContentContainer>
        <ContentContainer>
          <h2>시작일</h2>
          <Content>{startDate}</Content>
        </ContentContainer>
        <ContentContainer>
          <h2>시간</h2>
          <Content>{classHour}</Content>
          <Content>{hour}시간동안 진행</Content>
        </ContentContainer>
        <ContentContainer>
          <h2>정원</h2>
          <Content>
            {members.length}명/{capacity}명
          </Content>
        </ContentContainer>
        <TagContainer>
          <h2>태그</h2>
          <TagList>
            {tags.map((tag) => (
              <Tag key={tag.id} tag={tag.name} />
            ))}
          </TagList>
        </TagContainer>
        <PlanContainer>
          <h2>계획서</h2>
          <Plan>{description}</Plan>
        </PlanContainer>
        {isLogin && (
          <MemberContainer>
            <h2>참여 멤버</h2>
            <Member>
              {members.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </Member>
          </MemberContainer>
        )}
        <SessionContainer>
          <h2>회차 정보</h2>
          <Sessions>
            {sessions.map((session) => (
              <Session key={session.id} session={session} memberInfo={member} />
            ))}
          </Sessions>
        </SessionContainer>
      </ActivityDetailContainer>
    </ActivityDetailBlock>
  );
};

export default ActivityDetail;
