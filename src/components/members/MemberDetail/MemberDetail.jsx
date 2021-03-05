import React from 'react';
import ActivityCard from '../../activity/ActivityCard/ActivityCard';
import ProjectCard from '../../projects/ProjectCard/ProjectCard';
import {
  Activities,
  ActivityContainer,
  ContentContainer, Department, DepartmentContainer,
  ImageContainer, Introduction, IntroductionContainer,
  MemberDetailBlock,
  MemberDetailContainer, Name, NameContainer, Status,
  StyledImage, TextContainer,
} from './MemberDetail.styles';

const MemberDetail = ({ member }) => {
  const {
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
