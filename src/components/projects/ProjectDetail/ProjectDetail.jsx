import React from 'react';
import MemberCard from '../../members/MemberCard/MemberCard';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {
  BodyContainer,
  Duration,
  DurationContainer,
  Genre,
  GenreContainer,
  ImageContainer,
  Introduction,
  IntroductionContainer,
  MemberContainer,
  Members,
  Name,
  NameContainer,
  StyledImage,
  TextContainer,
} from './ProjectDetail.styles';
import { Block, WhiteBlock } from '../../../styles/common/Block.styles';

const ProjectDetail = ({ project, member }) => {
  console.log(project);
  const { thumbnailURL, name, genre, duration, body, members } = project;

  const {
    status: { isLogin },
  } = member;

  return (
    <Block>
      <WhiteBlock>
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
              <BodyContainer>
                <ReactMarkdown plugins={[gfm]} source={body} />
              </BodyContainer>
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
                <MemberCard key={member.loginID} member={member} />
              ))}
            </Members>
          </MemberContainer>
        )}
      </WhiteBlock>
    </Block>
  );
};

export default ProjectDetail;
