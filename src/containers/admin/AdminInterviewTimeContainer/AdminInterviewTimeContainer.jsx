import React, { useEffect, useState } from 'react';
import AdminInterviewTime from '../../../components/admin/AdminInterviewTime/AdminInterviewTime';

const mockData = {
  mySlotId: null,
  data: [
    /*
    {
      date: '2021-07-15',
      slots: [
        {
          id: 0,
          startTime: '13:00',
          endTime: '13:15',
          interviewees: [],
          capacity: 3,
        },
        {
          id: 1,
          date: '2021-07-15',
          startTime: '13:15',
          endTime: '13:30',
          interviewees: [],
          capacity: 3,
        },
        {
          id: 2,
          date: '2021-07-15',
          startTime: '13:30',
          endTime: '13:45',
          interviewees: [],
          capacity: 3,
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
          interviewees: [
            {
              loginId: 'mingd1023',
              name: '김민지',
              studentId: '2015110019',
              department: '국어국문학과',
              phoneNumber: '010-3070-9326',
            },
            {
              loginId: 'admin1',
              studentId: '2015110010',
              department: '국어국문학과',
              phoneNumber: '010-3071-9326',
            },
          ],
          capacity: 2,
        },
        {
          id: 4,
          date: '2021-07-16',
          startTime: '15:15',
          endTime: '15:30',
          interviewees: [],
          capacity: 3,
        },
        {
          id: 5,
          date: '2021-07-16',
          startTime: '15:30',
          endTime: '15:45',
          num: 2,
          interviewees: [],
          capacity: 3,
        },
        {
          id: 6,
          date: '2021-07-16',
          startTime: '15:45',
          endTime: '16:00',
          num: 2,
          interviewees: [],
          capacity: 3,
        },
        {
          id: 7,
          date: '2021-07-16',
          startTime: '16:00',
          endTime: '16:15',
          num: 2,
          interviewees: [],
          capacity: 3,
        },
        {
          id: 8,
          date: '2021-07-16',
          startTime: '16:15',
          endTime: '16:30',
          num: 2,
          interviewees: [],
          capacity: 3,
        },
        {
          id: 9,
          date: '2021-07-16',
          startTime: '16:30',
          endTime: '16:45',
          num: 2,
          interviewees: [],
          capacity: 3,
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
          interviewees: [],
          capacity: 3,
        },
        {
          id: 11,
          date: '2021-07-17',
          startTime: '18:15',
          endTime: '18:30',
          num: 2,
          interviewees: [],
          capacity: 3,
        },
      ],
    },
    */
  ],
};

const AdminInterviewTimeContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(mockData.data);
    }, 250);
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  return <AdminInterviewTime data={data} loading={loading} setData={setData} />;
};

export default AdminInterviewTimeContainer;
