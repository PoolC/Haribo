import React from 'react';
import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import BookCard from '../BookCard/BookCard';

const BookListBlock = styled.div`
  position: relative;
  top: 0px;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0px 0 300px 0;
  @media (max-width: 576px) {
    margin-bottom: 500px;
  }
`;

const BookListContainer = styled.div`
  width: 100%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  border-radius: 50px;
  padding: 40px 40px 60px 40px;
  & > .book_container_title {
    font-weight: 700;
    margin-bottom: 30px;
    max-width: 1200px;
  }
`;

const List = styled.ul`
  width: 100%;
  max-width: 1200px;
`;

const BookList = ({ books }) => {
  return (
    <>
      <BookListBlock>
        <BookListContainer>
          <h3 className="book_container_title">보유 도서</h3>
          <List>
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </List>
        </BookListContainer>
      </BookListBlock>
    </>
  );
};

export default BookList;
