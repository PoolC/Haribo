import React, { useEffect, useState } from 'react';
import * as bookAPI from '../../../lib/api/book';
import AdminBookForm from '../../../components/admin/AdminBookForm/AdminBookForm';
import { withRouter } from 'react-router-dom';

const AdminBookFormContainer = ({ match, history }) => {
  const bookID = match.params.bookID;
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (bookID) {
      (async () => {
        const response = await bookAPI.getBook(bookID);
        console.log(response);
        setBook(response.data);
      })();
    }
  }, []);

  if (bookID && book === null) {
    return null;
  }

  const onCreateBook = ({ title, author, imageURL, info }) => {
    bookAPI.createBook({ title, author, imageURL, info }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        history.push('/admin/books');
      }
    });
  };

  const onUpdateBook = ({ title, author, imageURL, info }) => {
    bookAPI
      .updateBook({ bookID, title, author, imageURL, info })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          history.push('/admin/books');
        }
      });
  };

  return (
    <AdminBookForm
      onCreateBook={onCreateBook}
      onUpdateBook={onUpdateBook}
      book={book}
    />
  );
};

export default withRouter(AdminBookFormContainer);
