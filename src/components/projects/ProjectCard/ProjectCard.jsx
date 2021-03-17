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
  ThumbnailContainer,
  StyledLink,
} from './ProjectCard.styles';

const ProjectCard = ({ project }) => {
  const { id, thumbnailURL, name, genre, description } = project;
  return (
    <StyledLink to={`/${MENU.PROJECT}/${id}`}>
      <ProjectCardBlock>
        <Card>
          <ThumbnailContainer>
            <ProjectThumbnail
              src={getFileUrl(thumbnailURL)}
              alt="project_thumbnail"
            />
          </ThumbnailContainer>
          <ProjectTitle>{name}</ProjectTitle>
          <ProjectGenre>{genre}</ProjectGenre>
          <ProjectDescription>{description}</ProjectDescription>
        </Card>
      </ProjectCardBlock>
    </StyledLink>
  );
};

export default ProjectCard;
