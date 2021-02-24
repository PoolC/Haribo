import AdminBook from '../../../components/admin/AdminBook/AdminBook';
import React from 'react';

const AdminBookContainer = () => {
  const books = [
    {
      id: 0,
      title: '객체지향의 오해와 진실',
      author: '박형철',
      status: 'AVAILABLE',
      imageUrl:
        'http://image.yes24.com/momo/TopCate511/MidCate005/51040273.jpg',
    },
    {
      id: 1,
      title: '객체지향의 오해와 진실',
      author: '박형철',
      status: 'AVAILABLE',
      imageUrl:
        'http://image.yes24.com/momo/TopCate511/MidCate005/51040273.jpg',
    },
  ];
  return <AdminBook books={books} />;
};

export default AdminBookContainer;
