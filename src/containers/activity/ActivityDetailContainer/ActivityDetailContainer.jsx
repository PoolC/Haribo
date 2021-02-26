import ActivityDetail from '../../../components/activity/ActivityDetail/ActivityDetail';
import React from 'react';
import { useSelector } from 'react-redux';

const ActivityDetailContainer = () => {
  const activity = {
    id: 0,
    title: 'C++ 기초 세미나',
    host: '송재우',
    startDate: '2019-09-01',
    classHour: '매주 금요일 3시',
    hour: 2,
    isSeminar: true,
    capacity: 10,
    available: true,
    description: '세상에서 제일 쉬운 C++ 세미나',
    tags: [
      { id: 0, name: '기초' },
      { id: 1, name: 'C++' },
      { id: 2, name: '프로그래밍 언어' },
    ],
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
    sessions: [
      {
        id: 0,
        description: '변수',
        date: '2019-09-01',
        sessionNumber: 1,
        attendances: {
          members: [
            { id: 0, name: '김민지' },
            { id: 1, name: '송재우' },
            { id: 2, name: '장현서' },
            { id: 3, name: '양정일' },
          ],
        },
      },
      {
        id: 1,
        description: '조건문과 반복문',
        date: '2019-09-08',
        sessionNumber: 2,
        attendances: {
          members: [
            { id: 0, name: '김민지' },
            { id: 1, name: '송재우' },
            { id: 2, name: '장현서' },
            { id: 3, name: '양정일' },
          ],
        },
      },
      {
        id: 2,
        description: '배열과 포인터',
        date: '2019-09-15',
        sessionNumber: 3,
        attendances: {
          members: [],
        },
      },
      {
        id: 3,
        description: '구조체와 함수',
        date: '2019-09-22',
        sessionNumber: 4,
        attendances: {
          members: [
            { id: 0, name: '김민지' },
            { id: 1, name: '송재우' },
            { id: 2, name: '장현서' },
            { id: 3, name: '양정일' },
          ],
        },
      },
    ],
  };
  const member = useSelector((state) => state.auth);
  return <ActivityDetail activity={activity} member={member} />;
};

export default ActivityDetailContainer;
