import ActivityAttendance from '../../../components/activity/ActivityForm/ActivityAttendance';
import React from 'react';

const ActivityAttendanceContainer = () => {
  const activity = {
    id: 0,
    title: 'C++ 기초 세미나',
    count: 3,
    members: [
      {
        id: 0,
        name: '김민지',
        department: '국어국문학과',
        profileImageURL:
          'https://api.poolc.org/files/%EC%82%B0%EB%82%98%EB%B9%84%20%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7.PNG',
        isAdmin: false,
      },
      {
        id: 1,
        name: '장현서',
        department: '도시공학과',
        profileImageURL:
          'https://api.poolc.org/files/%EC%82%B0%EB%82%98%EB%B9%84%20%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7.PNG',
        isAdmin: false,
      },
      {
        id: 2,
        name: '신석주',
        department: '도시공학과',
        profileImageURL:
          'https://api.poolc.org/files/%EC%82%B0%EB%82%98%EB%B9%84%20%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7.PNG',
        isAdmin: true,
      },
      {
        id: 3,
        name: '양정일',
        department: '컴퓨터과학과',
        profileImageURL:
          'https://api.poolc.org/files/%EC%82%B0%EB%82%98%EB%B9%84%20%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7.PNG',
        isAdmin: false,
      },
    ],
  };

  return <ActivityAttendance activity={activity} />;
};

export default ActivityAttendanceContainer;
