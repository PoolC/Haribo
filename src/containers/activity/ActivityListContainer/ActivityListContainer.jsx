import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import ActivityMenu from '../../../components/activity/ActivityMenu/ActivityMenu';
import ActivityList from '../../../components/activity/ActivityList/ActivityList';

const ActivityListContainerBlock = styled.div`
  position: relative;
  top: 0px;
  width: 90%;
  left: 5%;
  right: 5%;
  display: flex;
  margin: 0px 0 300px 0;
  @media (max-width: 576px) {
    margin-bottom: 500px;
    flex-direction: column;
  }
`;

const ActivityListContainer = ({ location, history }) => {
  const currentLocation = location.search.replace('?semester=', '');

  const onToggleRegisterActivity = (id) => {
    console.log(id);
    /* 요청 보내는 코드 작성 */
  };

  const activities = [
    {
      id: 0,
      title: 'C++ 기초 세미나',
      host: '송재우',
      startDate: '2019-09-01',
      endDate: '2019-11-01',
      classHour: '금요일 3시',
      isSeminar: true,
      capacity: 10,
      available: true,
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
    },
    {
      id: 1,
      title: '안드로이드 앱 프로그래밍 세미나',
      host: '송재우',
      startDate: '2019-09-01',
      endDate: '2019-11-01',
      classHour: '금요일 3시',
      isSeminar: true,
      capacity: 10,
      available: true,
      tags: [
        { id: 0, name: '기초' },
        { id: 1, name: 'Java' },
      ],
      members: [
        { id: 0, name: '김민지' },
        { id: 1, name: '장현서' },
        { id: 2, name: '신석주' },
      ],
    },
    {
      id: 2,
      title: '자연어처리 논문 스터디',
      host: '이재성',
      startDate: '2019-09-01',
      endDate: '2019-11-01',
      classHour: '금요일 3시',
      isSeminar: false,
      capacity: 10,
      available: true,
      tags: [{ id: 0, name: '기초' }],
      members: [
        { id: 0, name: '김민지' },
        { id: 1, name: '장현서' },
        { id: 2, name: '신석주' },
      ],
    },
    {
      id: 3,
      title: 'React 세미나',
      host: '정윤석',
      startDate: '2019-09-01',
      endDate: '2019-11-01',
      classHour: '금요일 3시',
      isSeminar: true,
      capacity: 10,
      available: false,
      tags: [
        { id: 0, name: '기초' },
        { id: 1, name: '웹' },
        { id: 2, name: '프론트엔드' },
        { id: 2, name: 'react' },
        { id: 3, name: 'JavaScript' },
      ],
      members: [
        { id: 0, name: '김민지' },
        { id: 1, name: '장현서' },
        { id: 2, name: '신석주' },
      ],
    },
    {
      id: 4,
      title: 'C++ 기초 세미나',
      host: '송재우',
      startDate: '2019-09-01',
      endDate: '2019-11-01',
      classHour: '금요일 3시',
      isSeminar: true,
      capacity: 10,
      available: true,
      tags: [
        { id: 0, name: '기초' },
        { id: 1, name: 'C++' },
        { id: 2, name: '프로그래밍 언어' },
      ],
      members: [
        { id: 0, name: '김민지' },
        { id: 1, name: '장현서' },
        { id: 2, name: '신석주' },
      ],
    },
  ];

  const semesters = [
    '2018-1',
    '2018-2',
    '2019-1',
    '2019-2',
    '2020-1',
    '2020-2',
    '2021-1',
  ];

  return (
    <ActivityListContainerBlock>
      {/* <ActivityModalContainer /> */}
      <ActivityMenu semesters={semesters} currentLocation={currentLocation} />
      <ActivityList
        activities={activities}
        onToggleRegisterActivity={onToggleRegisterActivity}
      />
    </ActivityListContainerBlock>
  );
};

export default withRouter(ActivityListContainer);
