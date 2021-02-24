import MemberDetail from '../../../components/members/MemberDetail/MemberDetail';
import React from 'react';
import { withRouter } from 'react-router-dom';

const MemberDetailContainer = ({ match }) => {
  const { memberId } = match.params;
  const member = {
    id: 0,
    name: '김민지',
    department: '국어국문학과',
    profileImageURL:
      'https://api.poolc.org/files/%EC%82%B0%EB%82%98%EB%B9%84%20%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7.PNG',
    isAdmin: true,
    introduction: '안녕하세요 반갑습니다~~',
    projects: [
      {
        id: 0,
        thumbnailURL: 'https://api.poolc.org/files/Yourtail.png',
        name: 'Yourtail',
        genre: '감성, 휴먼, 스토리',
        duration: '2020-05-20 ~',
        body:
          '개요 : 칵테일 바에서 바텐더와 이야기를 나누는 감성을 느낄 수 있는 게임입니다.',
      },
      {
        id: 1,
        thumbnailURL: 'https://api.poolc.org/files/Yourtail.png',
        name: 'Yourtail',
        genre: '감성, 휴먼, 스토리',
        duration: '2020-05-20 ~',
        body:
          '개요 : 칵테일 바에서 바텐더와 이야기를 나누는 감성을 느낄 수 있는 게임입니다.',
      },
      {
        id: 2,
        thumbnailURL: 'https://api.poolc.org/files/Yourtail.png',
        name: 'Yourtail',
        genre: '감성, 휴먼, 스토리',
        duration: '2020-05-20 ~',
        body:
          '개요 : 칵테일 바에서 바텐더와 이야기를 나누는 감성을 느낄 수 있는 게임입니다.',
      },
    ],
    activities: [
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
      },
      {
        id: 1,
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
      },
    ],
  };

  return <MemberDetail member={member} />;
};

export default withRouter(MemberDetailContainer);
