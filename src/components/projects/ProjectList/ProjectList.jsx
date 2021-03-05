import React from 'react';
import { Block, WhiteBlock } from '../../../styles/common/Block.styles';
import ProjectCard from '../ProjectCard/ProjectCard';
import { Project } from './ProjectList.styles';

const ProjectList = ({ projects }) => {
  return (
    <Block>
      <WhiteBlock>
        <h2 className="block_title">프로젝트</h2>
        <Project>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Project>
      </WhiteBlock>
    </Block>
  );
};

export default ProjectList;
