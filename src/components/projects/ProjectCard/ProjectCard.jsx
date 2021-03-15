import React from 'react';
import { MENU } from '../../../constants/menus';
import getFileUrl from '../../../lib/utils/getFileUrl';
import {
  Card,
  ProjectCardBlock,
  ProjectDescription,
  ProjectGenre,
  ProjectThumbnail,
  ProjectTitle,
  StyledLink,
} from './ProjectCard.styles';

const ProjectCard = ({ project }) => {
  const { id, thumbnailURL, name, genre, description } = project;
  return (
    <StyledLink to={`/${MENU.PROJECT}/${id}`}>
      <ProjectCardBlock>
        <Card>
          <ProjectThumbnail
            src={getFileUrl(thumbnailURL)}
            alt="project_thumbnail"
          />
          <ProjectTitle>{name}</ProjectTitle>
          <ProjectGenre>{genre}</ProjectGenre>
          <ProjectDescription>{description}</ProjectDescription>
        </Card>
      </ProjectCardBlock>
    </StyledLink>
  );
};

export default ProjectCard;
