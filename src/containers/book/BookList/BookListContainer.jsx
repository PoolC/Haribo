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

  const onBorrowBook = (id, status) => {
    bookAPI.borrowBook(id).then((res) => {
      if (res.status === 200) {
        const newBooks = books.map((book) =>
          book.id === id
            ? {
                ...book,
                status: 'UNAVAILABLE',
                borrower: { name: member.user.name },
              }
            : book,
        );
        setBooks(newBooks);
      }
    });
  };

  const onReturnBook = (id, status) => {
    bookAPI.returnBook(id).then((res) => {
      if (res.status === 200) {
        const newBooks = books.map((book) =>
          book.id === id
            ? { ...book, status: 'AVAILABLE', borrower: null }
            : book,
        );
        setBooks(newBooks);
      }
    });
  };

  return (
    <>
      <BookList
        member={member}
        books={books}
        onBorrowBook={onBorrowBook}
        onReturnBook={onReturnBook}
      />
    </>
  );
};

export default BookListContainer;
