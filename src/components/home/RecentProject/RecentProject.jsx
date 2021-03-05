import React from 'react';
import ProjectCard from '../../projects/ProjectCard/ProjectCard';
import { RecentProjectBlock, RecentProjectList, StyledLink } from './RecentProject.styles';

const RecentProject = ({ projects }) => {
  return (
    <RecentProjectBlock>
      <h3 className="project_container_title">
        <StyledLink to="/projects">Recent Projects</StyledLink>
      </h3>
      <RecentProjectList>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </RecentProjectList>
    </RecentProjectBlock>
  );
};

export default RecentProject;
