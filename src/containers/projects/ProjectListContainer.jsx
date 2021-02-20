import React from 'react';
import ProjectList from '../../components/projects/ProjectList';

const ProjectListContainer = () => {
  const projects = [
    {
      id: 0,
      imageURL: 'https://api.poolc.org/files/Yourtail.png',
      title: 'Yourtail',
      genre: '감성, 휴먼, 스토리',
    },
    {
      id: 1,
      imageURL: 'https://api.poolc.org/files/Yourtail.png',
      title: 'Yourtail',
      genre: '감성, 휴먼, 스토리',
    },
    {
      id: 2,
      imageURL: 'https://api.poolc.org/files/Yourtail.png',
      title: 'Yourtail',
      genre: '감성, 휴먼, 스토리',
    },
    {
      id: 3,
      imageURL: 'https://api.poolc.org/files/Yourtail.png',
      title: 'Yourtail',
      genre: '감성, 휴먼, 스토리',
    },
    {
      id: 4,
      imageURL: 'https://api.poolc.org/files/Yourtail.png',
      title: 'Yourtail',
      genre: '감성, 휴먼, 스토리',
    },
  ];
  return <ProjectList projects={projects} />;
};

export default ProjectListContainer;
