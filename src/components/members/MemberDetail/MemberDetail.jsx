import React from 'react';
import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import ActivityCard from '../../activity/ActivityCard/ActivityCard';
import ProjectCard from '../../projects/ProjectCard/ProjectCard';

const MemberDetailBlock = styled.div`
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

const MemberDetailContainer = styled.div`
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  border-radius: 50px;
  padding: 80px 10px 120px 10px;
  & > .project_container_title {
    font-weight: 700;
    margin-bottom: 30px;
    max-width: 1200px;
  }
`;

const ContentContainer = styled.div`
  width: 90%;
  display: flex;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 20px;
  margin: auto;
`;

const StyledImage = styled.img``;

const TextContainer = styled.div`
  flex: 1;
  padding: 30px 30px;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: flex-end;
  @media (max-width: 576px) {
    justify-content: center;
  }
`;

const Name = styled.p`
  font-weight: 800;
  font-size: 2rem;
`;

const Status = styled.span`
  font-weight: 300;
  margin-left: 5px;
`;

const DepartmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 20px 0;
  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    margin: 10px 0;
  }
  @media (max-width: 576px) {
    align-items: center;
    justify-content: center;
  }
`;

const Department = styled.p``;

const IntroductionContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 40px 0 20px 0;
  font-size: 1.5rem;
  span {
    font-size: 0.8rem;
    color: ${colors.brown[0]};
    margin: 5px;
  }
`;

const Introduction = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  text-align: center;
  word-break: keep-all;
`;

const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
  width: 90%;
  h2 {
    padding: 0px 20px;
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

const Activities = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  overflow: scroll;
  scrollbar-color: none;
  margin: 0;
  padding: 0;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const MemberDetail = ({ member }) => {
  const {
    loginID,
    name,
    department,
    profileImageURL,
    isAdmin,
    introduction,
    projects,
    activities,
  } = member;
  return (
    <MemberDetailBlock>
      <MemberDetailContainer>
        <ContentContainer>
          <ImageContainer>
            <StyledImage src={profileImageURL} />
          </ImageContainer>
          <TextContainer>
            <NameContainer>
              <Name>{name}</Name>
              {isAdmin && <Status>PoolC임원</Status>}
            </NameContainer>
            <DepartmentContainer>
              <h2>전공</h2>
              <Department>{department}</Department>
            </DepartmentContainer>
            <IntroductionContainer>
              <Introduction>
                <span>
                  <i className="fas fa-quote-left"></i>
                </span>
                {introduction}
                <span>
                  <i className="fas fa-quote-right"></i>
                </span>
              </Introduction>
            </IntroductionContainer>
          </TextContainer>
        </ContentContainer>
        <ActivityContainer>
          <h2>참여 활동</h2>
          <Activities>
            {projects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            {activities?.map((activity) => (
              <ActivityCard activity={activity} />
            ))}
          </Activities>
        </ActivityContainer>
      </MemberDetailContainer>
    </MemberDetailBlock>
  );
};

export default MemberDetail;
