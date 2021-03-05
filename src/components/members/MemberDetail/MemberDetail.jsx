import React from 'react';
import { Block, WhiteBlock } from '../../../styles/common/Block.styles';
import ActivityCard from '../../activity/ActivityCard/ActivityCard';
import ProjectCard from '../../projects/ProjectCard/ProjectCard';
import {
  Activities,
  ActivityContainer,
  ContentContainer,
  Department,
  DepartmentContainer,
  ImageContainer,
  Introduction,
  IntroductionContainer,
  Name,
  NameContainer,
  Status,
  StyledImage,
  TextContainer,
} from './MemberDetail.styles';

const MemberDetail = ({ member }) => {
  const {
    name,
    department,
    profileImageURL,
    isAdmin,
    introduction,
    projects,
    hostActivities,
    participantActivities,
  } = member;
  return (
    <Block>
      <WhiteBlock>
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
            {hostActivities?.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
            {participantActivities?.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </Activities>
        </ActivityContainer>
      </WhiteBlock>
    </Block>
  );
};

export default MemberDetail;
