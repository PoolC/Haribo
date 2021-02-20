import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import ProjectCard from './ProjectCard';

const ProjectListBlock = styled.div`
  position: relative;
  top: 0px;
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  margin: 0px 0 50px 0;
`;

const ProjectListContainer = styled.div`
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  border-radius: 50px;
  padding: 30px 10px 50px 10px;
  & > .project_container_title {
    font-weight: 700;
    margin-bottom: 30px;
    max-width: 1200px;
  }
`;

const Project = styled.ul`
  width: 90%;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  max-width: 1200px;
`;

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
