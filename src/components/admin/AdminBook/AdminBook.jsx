import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';
import React from 'react';
import styled from 'styled-components';
import { MENU } from '../../../constants/menus';

const AdminBooksBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  flex: 4;
  border-radius: 50px;
  padding: 30px 0px;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: flex-end;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem;
`;

const ContentsContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
`;

const Table = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  border-radius: 1em;
  overflow: hidden;
  & > thead {
    padding: 0;
    margin: 0;
  }
  & > tbody {
    width: 100%;
  }
`;

const TableHead = styled.tr`
  cursor: default;
  display: flex;
  width: 100%;
  background-color: ${colors.mint[0]};
  margin: 0;
  padding: 0.8rem 0px;
  font-size: 0.9rem;
  & > .book_list_head {
    flex: 1;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const BookListRow = styled.tr`
  cursor: default;
  display: flex;
  padding: 0.5rem 0;
  transition: 0.3s;
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
  & > .book-list-row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0 10px;
    line-height: 1.5rem;
    font-size: 0.8rem;
  }
  &:hover {
    background-color: ${colors.gray[0]};
    transition: 0.3s;
  }
`;

const StyledImage = styled.img`
  width: 80px;
`;

const StyledActionButton = styled(ActionButton)``;

const AdminBook = ({ books, onDeleteBook }) => {
  const handleDelete = (e, bookID) => {
    e.preventDefault();
    onDeleteBook(bookID);
  };
  return (
    <AdminBooksBlock>
      <TitleContainer>도서 관리</TitleContainer>
      <ButtonContainer>
        <ActionButton to={`/${MENU.ADMIN}/books/new`}>도서 생성</ActionButton>
      </ButtonContainer>
      <ContentsContainer>
        <Table>
          <thead>
            <TableHead>
              <th className="book_list_head">표지</th>
              <th className="book_list_head">제목</th>
              <th className="book_list_head">저자</th>
              <th className="book_list_head">상태</th>
              <th className="book_list_head">동작</th>
            </TableHead>
          </thead>
          <tbody>
            {books.map((book) => (
              <BookListRow key={book.id}>
                <td className="book-list-row">
                  <StyledImage src={book.imageURL} />
                </td>
                <td className="book-list-row">{book.title}</td>
                <td className="book-list-row">{book.author}</td>
                <td className="book-list-row">
                  {book.status === 'AVAILABLE' ? '이용 가능' : '대출중'}
                </td>
                <td className="book-list-row">
                  <StyledActionButton
                    to={`/${MENU.ADMIN}/books/edit/${book.id}`}
                  >
                    편집
                  </StyledActionButton>
                  <StyledActionButton onClick={(e) => handleDelete(e, book.id)}>
                    삭제
                  </StyledActionButton>
                </td>
              </BookListRow>
            ))}
          </tbody>
        </Table>
      </ContentsContainer>
    </AdminBooksBlock>
  );
};

export default AdminBook;
