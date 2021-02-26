import React from 'react';
import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import MemberCard from '../../members/MemberCard/MemberCard';

const ProjectDetailBlock = styled.div`
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

const ProjectDetailContainer = styled.div`
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  border-radius: 50px;
  padding: 60px 0;
  & > .project_container_title {
    font-weight: 700;
    margin-bottom: 30px;
    max-width: 1200px;
  }
`;

const ImageContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  height: auto;
  max-height: 500px;
  overflow: hidden;
  border-radius: 20px;
  margin: 0px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 50px 0px 30px 0px;
  max-width: 1200px;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Name = styled.p`
  font-weight: 800;
  font-size: 2rem;
`;

const GenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 20px 0;
  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    margin: 10px 0 30px 0;
  }
`;

const Genre = styled.p``;

const DurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 20px 0;
`;

const Duration = styled.p`
  color: ${colors.brown[0]};
`;

const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 40px 0 20px 0;
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
  font-size: 1rem;
  line-height: 1.2rem;
`;

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  width: 90%;
  margin-top: 20px;
  max-width: 1200px;
  h2 {
    padding: 0px 20px;
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
`;

const Members = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  overflow: scroll;
  scrollbar-color: none;
  margin: 0;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const ProjectDetail = ({ project, member }) => {
  const { id, thumbnailURL, name, genre, duration, body } = project;
  const members = [];
  const {
    status: { isLogin },
    user: { isAdmin },
  } = member;

  return (
    <ProjectDetailBlock>
      <ProjectDetailContainer>
        <ImageContainer>
          <StyledImage src={thumbnailURL} />
        </ImageContainer>
        <TextContainer>
          <NameContainer>
            <Name>{name}</Name>
          </NameContainer>
          <GenreContainer>
            <Genre>{genre}</Genre>
          </GenreContainer>
          <DurationContainer>
            <Duration>{duration}</Duration>
          </DurationContainer>
          <IntroductionContainer>
            <Introduction>
              <span>
                <i className="fas fa-quote-left"></i>
              </span>
              {body}
              <span>
                <i className="fas fa-quote-right"></i>
              </span>
            </Introduction>
          </IntroductionContainer>
        </TextContainer>
        {isLogin && (
          <MemberContainer>
            <h2>참여 멤버</h2>
            <Members>
              {members.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </Members>
          </MemberContainer>
        )}
      </ProjectDetailContainer>
    </ProjectDetailBlock>
  );
};

export default ProjectDetail;
