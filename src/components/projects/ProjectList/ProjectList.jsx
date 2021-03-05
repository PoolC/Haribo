import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { Project, ProjectListBlock, ProjectListContainer } from './ProjectList.styles';

const ProjectList = ({ projects }) => {
  return (
    <ProjectListBlock>
      <ProjectListContainer>
        <h3 className="project_container_title">프로젝트</h3>
        <Project>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Project>
      </ProjectListContainer>
    </ProjectListBlock>
  );
};

export default ProjectList;
