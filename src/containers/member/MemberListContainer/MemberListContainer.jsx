import MemberList from '../../../components/members/MemberList/MemberList';
import React from 'react';

const MemberListContainer = () => {
  const members = [
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
    {
      id: 5,
      name: '김민지',
      department: '국어국문학과',
      profileImageURL:
        'https://api.poolc.org/files/%EC%82%B0%EB%82%98%EB%B9%84%20%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7.PNG',
    },
    {
      id: 6,
      name: '김민지',
      department: '국어국문학과',
      profileImageURL:
        'https://api.poolc.org/files/%EC%82%B0%EB%82%98%EB%B9%84%20%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7.PNG',
    },
  ];
  return <MemberList members={members} />;
};

export default MemberListContainer;
