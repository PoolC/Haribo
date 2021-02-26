import ProjectDetail from '../../../components/projects/ProjectDetail/ProjectDetail';
import React from 'react';
import { useSelector } from 'react-redux';

const ProjectDetailContainer = () => {
  const member = useSelector((state) => state.auth);
  const project = {
    id: 0,
    thumbnailURL: 'https://api.poolc.org/files/Yourtail.png',
    name: 'Yourtail',
    genre: '감성, 휴먼, 스토리',
    duration: '2020-05-20 ~',
    body:
      '개요 : 칵테일 바에서 바텐더와 이야기를 나누는 감성을 느낄 수 있는 게임입니다.',
    members: [
      {
        id: 0,
        name: '김민지',
        department: '국어국문학과',
        profileImageURL:
          'https://api.poolc.org/files/%EC%82%B0%EB%82%98%EB%B9%84%20%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7.PNG',
        isAdmin: true,
      },
      {
        id: 1,
        name: '김민지',
        department: '국어국문학과',
        profileImageURL:
          'https://api.poolc.org/files/%EC%82%B0%EB%82%98%EB%B9%84%20%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7.PNG',
      },
      {
        id: 2,
        name: '김민지',
        department: '국어국문학과',
        profileImageURL:
          'https://api.poolc.org/files/%EC%82%B0%EB%82%98%EB%B9%84%20%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7.PNG',
      },
      {
        id: 3,
        name: '김민지',
        department: '국어국문학과',
        profileImageURL:
          'https://api.poolc.org/files/%EC%82%B0%EB%82%98%EB%B9%84%20%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7.PNG',
      },
      {
        id: 4,
        name: '김민지',
        department: '국어국문학과',
        profileImageURL:
          'https://api.poolc.org/files/%EC%82%B0%EB%82%98%EB%B9%84%20%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7.PNG',
      },
    ],
  };
  return <ProjectDetail project={project} member={member} />;
};

export default ProjectDetailContainer;
