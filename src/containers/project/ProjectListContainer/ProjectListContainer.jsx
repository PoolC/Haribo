import ProjectList from '../../../components/projects/ProjectList/ProjectList';
import React from 'react';

const ProjectListContainer = () => {
  const projects = [
    {
      id: 0,
      thumbnailURL: 'https://api.poolc.org/files/Yourtail.png',
      name: 'Yourtail',
      genre: '감성, 휴먼, 스토리',
      description: '새 손님들의 고민을 들어주는 칵테일바 시뮬레이션 게임',
    },
    {
      id: 1,
      thumbnailURL: 'https://api.poolc.org/files/Cafe%20Forest.png',
      name: 'Cafe Forest',
      genre: '경영',
      description: '귀여운 동물캐릭터들의 카페 경영게임',
    },
    {
      id: 2,
      thumbnailURL: 'https://api.poolc.org/files/poolc_site.png',
      name: 'Nagase,SigAhri',
      genre: '웹',
      description: '풀씨 홈페이지 제작',
    },
    {
      id: 3,
      thumbnailURL:
        'https://api.poolc.org/files/%EC%82%B0%EB%82%98%EB%B9%84%20%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7.PNG',
      name: '산나비',
      genre: '게임',
      description: '2D 플랫포머 게임',
    },
    {
      id: 4,
      thumbnailURL: 'https://api.poolc.org/files/Yourtail.png',
      name: 'Yourtail',
      genre: '감성, 휴먼, 스토리',
      description: '새 손님들의 고민을 들어주는 칵테일바 시뮬레이션 게임',
    },
  ];
  return <ProjectList projects={projects} />;
};

export default ProjectListContainer;
