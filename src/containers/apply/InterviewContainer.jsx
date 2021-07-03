import React, { useEffect, useState } from 'react';
import Interview from '../../components/apply/Interview/Interview';

const mockData = [
  {
    date: '2021-07-15',
    slots: [
      { id: 0, startTime: '13:00', endTime: '13:15', num: 0 },
      {
        id: 1,
        date: '2021-07-15',
        startTime: '13:15',
        endTime: '13:30',
        num: 1,
      },
      {
        id: 2,
        date: '2021-07-15',
        startTime: '13:30',
        endTime: '13:45',
        num: 2,
      },
    ],
  },
  {
    date: '2021-07-16',
    slots: [
      {
        id: 3,
        date: '2021-07-16',
        startTime: '15:00',
        endTime: '15:15',
        num: 3,
      },
      {
        id: 4,
        date: '2021-07-16',
        startTime: '15:15',
        endTime: '15:30',
        num: 2,
      },
      {
        id: 5,
        date: '2021-07-16',
        startTime: '15:30',
        endTime: '15:45',
        num: 2,
      },
      {
        id: 6,
        date: '2021-07-16',
        startTime: '15:45',
        endTime: '16:00',
        num: 2,
      },
      {
        id: 7,
        date: '2021-07-16',
        startTime: '16:00',
        endTime: '16:15',
        num: 2,
      },
      {
        id: 8,
        date: '2021-07-16',
        startTime: '16:15',
        endTime: '16:30',
        num: 2,
      },
      {
        id: 9,
        date: '2021-07-16',
        startTime: '16:30',
        endTime: '16:45',
        num: 2,
      },
    ],
  },
  {
    date: '2021-07-17',
    slots: [
      {
        id: 10,
        date: '2021-07-17',
        startTime: '18:00',
        endTime: '18:15',
        num: 2,
      },
      {
        id: 11,
        date: '2021-07-17',
        startTime: '18:15',
        endTime: '18:30',
        num: 2,
      },
    ],
  },
];

const InterviewContainer = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(mockData);
    }, 250);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  return (
    <>
      <Interview data={data} loading={loading} />
    </>
  );
};

export default InterviewContainer;
