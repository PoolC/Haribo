import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import ActionButton from '../common/ActionButton';

const BookCardBlock = styled.li`
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BookCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.mint[1]};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 80%;
  box-shadow: 0px -10px 10px ${colors.gray[1]};
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 80%;
    transition: 0.3s;
  }
`;

const BookInfoContainer = styled.div`
  flex: 3;
  margin: 0px 10px;
`;

const BookTitle = styled.p`
  width: 90%;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 5px;
  word-break: keep-all;
  line-height: 1.1rem;
`;

const BookAuthor = styled.p`
  width: 90%;
  font-weight: 300;
  font-size: 0.8rem;
  margin-bottom: 5px;
`;

const BookInfo = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  display: flex;
  flex: 1;
  align-items: center;
  @media (max-width: 576px) {
    margin: auto;
    text-align: center;
  }
`;

const BookStatus = styled.p`
  display: flex;
  justify-content: flex-end;
  min-width: 5rem;
  font-weight: 500;
  font-size: 0.9rem;
  flex: 1;
  & > .fa-caret-down {
    margin-left: 8px;
  }
`;

const BookContentsContainer = styled.div`
  background-color: ${colors.mint[0]};
  height: 100px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 80%;
  box-shadow: 0px 10px 10px ${colors.gray[1]};
  padding: 10px 20px;
  display: flex;
`;

const BookImageContainer = styled.div`
  display: flex;
  margin-right: 20px;
  align-items: center;
  justify-content: start;
`;

const BookImage = styled.img`
  width: 70px;
  height: auto;
`;

const BookDetailInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  margin-bottom: 5px;
`;

const BookDetailContainer = styled.div`
  display: flex;
  flex: 7;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const Borrower = styled.p`
  font-size: 0.8rem;
  display: flex;
  flex: 1;
  align-items: center;
  @media (max-width: 576px) {
    margin: auto;
  }
  & > span {
    color: ${colors.brown[0]};
    margin-right: 5px;
  }
`;

const BorrowDate = styled.p`
  font-size: 0.8rem;
  display: flex;
  flex: 1;
  align-items: center;
  @media (max-width: 576px) {
    margin: auto;
    text-align: center;
  }
  & > span {
    color: ${colors.brown[0]};
    margin-right: 5px;
  }
`;

const BookDetailButton = styled(ActionButton)`
  flex: 1;
  height: 2rem;
  min-width: 3.5rem;
  max-width: 3.5rem;
  margin: auto;
`;

const BookCard = ({ book }) => {
  const {
    id,
    title,
    author,
    imageURL,
    status,
    info,
    borrower,
    borrowDate,
  } = book;
  return (
    <BookCardBlock>
      <BookCardContainer>
        <BookInfoContainer>
          <BookTitle>{title}</BookTitle>
          <BookAuthor>{author}</BookAuthor>
        </BookInfoContainer>
        <BookStatus>
          {status === 'available' ? '이용 가능' : '대출중'}
          <i class="fas fa-caret-down"></i>
        </BookStatus>
      </BookCardContainer>
      <BookContentsContainer>
        <BookImageContainer>
          <BookImage src={imageURL} alt="book_image" />
        </BookImageContainer>
        <BookDetailContainer>
          <BookDetailInfoContainer>
            {status !== 'available' && (
              <Borrower>
                <span>대출자</span> {borrower.name}
              </Borrower>
            )}
            {status !== 'available' && (
              <BorrowDate>
                <span>대출일</span> {borrowDate}
              </BorrowDate>
            )}
            {info && <BookInfo>[{info}]</BookInfo>}
          </BookDetailInfoContainer>
          {status === 'available' ? (
            <BookDetailButton>대출</BookDetailButton>
          ) : (
            <BookDetailButton>반납</BookDetailButton>
          )}
        </BookDetailContainer>
      </BookContentsContainer>
    </BookCardBlock>
  );
};

export default BookCard;
