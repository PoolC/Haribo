import BookList from '../../../components/books/BookList/BookList';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as bookAPI from '../../../lib/api/book';

const BookListContainer = () => {
  const member = useSelector((state) => state.auth);
  const [books, setBooks] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await bookAPI.getBooks();
      setBooks(response.data.data);
    })();
  }, []);

  if (books === null) {
    return null;
  }
  // const books = [
  //   {
  //     id: 0,
  //     title: '객체지향의 사실과 오해',
  //     author: '조영호',
  //     imageURL:
  //       'http://image.yes24.com/momo/TopCate511/MidCate005/51040273.jpg',
  //     status: 'available',
  //     borrower: [],
  //     info: '',
  //     borrowDate: '2021-02-18',
  //   },
  //   {
  //     id: 1,
  //     title: '클린 코드',
  //     author: '양정일',
  //     imageURL: 'http://image.yes24.com/Goods/11681152/L',
  //     status: 'available',
  //     borrower: [],
  //     info: '박형철 기증',
  //     borrowDate: '2021-02-18',
  //   },
  //   {
  //     id: 2,
  //     title: '리액트를 다루는 기술',
  //     author: 'Velopert',
  //     imageURL: 'http://image.yes24.com/goods/78233628/800x0',
  //     status: 'unavailable',
  //     borrower: { id: 0, name: '김민지' },
  //     info: '박형철 기증',
  //     borrowDate: '2021-02-18',
  //   },
  // ];

  const onChangeBookStatus = (id, status) => {
    console.log(id, status);
    /* 요청 보내는 코드 작성 */
  };

  return (
    <>
      <BookList
        member={member}
        books={books}
        onChangeBookStatus={onChangeBookStatus}
      />
    </>
  );
};

export default BookListContainer;
