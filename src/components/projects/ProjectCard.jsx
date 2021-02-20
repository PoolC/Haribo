import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';

const ProjectCardBlock = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  height: 210px;
  /* 
  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 100px;
  } */
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.mint[0]};
  border-radius: 20px;
  width: 260px;
  height: 200px;
  box-shadow: 0px 0px 10px ${colors.gray[1]};
  padding: 10px 0px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 80%;
    transition: 0.3s;
  }
`;

const ProjectThumbnail = styled.img`
  width: 240px;
  height: auto;
  max-height: 160px;
  overflow: hidden;
  flex: 4;
  border-radius: 20px;
`;

const ProjectTitle = styled.p`
  display: flex;
  align-items: center;
  width: 230px;
  flex: 2;
  font-size: 1.2rem;
  font-weight: 600;
`;

const ProjectGenre = styled.p`
  display: flex;
  flex: 1;
  width: 230px;
  font-size: 0.7rem;
  font-weight: 300;
`;

const ProjectCard = ({ project }) => {
  const { id, imageURL, title, genre } = project;
  return (
    <ProjectCardBlock>
      <Card>
        <ProjectThumbnail src={imageURL} alt="project_thumbnail" />
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectGenre>{genre}</ProjectGenre>
      </Card>
    </ProjectCardBlock>
  );
};

export default ProjectCard;
