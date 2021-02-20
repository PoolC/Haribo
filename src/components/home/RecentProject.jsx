import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import ProjectCard from '../projects/ProjectCard';

const RecentProjectBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 60px 0 120px 0;

  & > .project_container_title {
    padding-left: 20px;
    width: 90%;
    font-weight: 700;
    margin-bottom: 30px;
    color: ${colors.brown[1]};
  }
`;

const StyledLink = styled(Link)`
  color: ${colors.brown[1]};
`;

const RecentProjectList = styled.ul`
  width: 90%;
  display: flex;
  align-items: center;
  overflow: scroll;
  scrollbar-color: none;
  margin: 0;
  padding: 0;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

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
