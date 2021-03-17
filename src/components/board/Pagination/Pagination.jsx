import React from 'react';
import { withRouter } from 'react-router';
import { PageButton, PageItem, PageList } from './Pagination.styles';

const Pagination = ({
  postPerPage,
  totalPosts,
  paginate,
  setCurrentPageSet,
  currentPage,
  pagePerPage,
  currentPageSet,
  match,
  history,
}) => {
  const totalPageSet = Math.ceil(totalPosts / postPerPage / pagePerPage);
  const pageNumbers = [];
  for (
    let i = pagePerPage * (currentPageSet - 1) + 1;
    i <= pagePerPage * currentPageSet &&
    i <= Math.ceil(totalPosts / postPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const onClickPrev = () => {
    paginate(pagePerPage * (currentPageSet - 1));
    setCurrentPageSet(currentPageSet - 1);
    history.push(
      `/boards/${match.params.urlPath}?page=${
        pagePerPage * (currentPageSet - 1)
      }`,
    );
  };

  const onClickNext = () => {
    paginate(pagePerPage * currentPageSet + 1);
    setCurrentPageSet(currentPageSet + 1);
    history.push(
      `/boards/${match.params.urlPath}?page=${
        pagePerPage * currentPageSet + 1
      }`,
    );
  };

  return (
    <PageList>
      {currentPageSet > 1 && (
        <PageButton onClick={onClickPrev}>
          <i className="fas fa-chevron-left"></i>
        </PageButton>
      )}
      {pageNumbers.map((number) => (
        <PageItem
          selected={currentPage === number}
          key={number}
          onClick={() => paginate(number)}
          to={`/boards/${match.params.urlPath}?page=${number}`}
        >
          {number}
        </PageItem>
      ))}
      {currentPageSet < totalPageSet && (
        <PageButton onClick={onClickNext}>
          <i className="fas fa-chevron-right"></i>
        </PageButton>
      )}
    </PageList>
  );
};

export default withRouter(Pagination);
