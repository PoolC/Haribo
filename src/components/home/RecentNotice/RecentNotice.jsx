import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MENU } from '../../../constants/menus';
import colors from '../../../lib/styles/colors';
import { getFullCurrentDateString } from '../../../lib/utils/getDateString';

const RecentNoticeBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1366px;
  margin: 20px 0 100px 0;
`;

const StyledLink = styled(Link)`
  color: ${colors.brown[1]};
`;

const NoticeContainerTitle = styled.h3`
  padding-left: 20px;
  width: 90%;
  margin-bottom: 30px;
  font-weight: 700;
`;

const MainNoticeContents = styled.div`
  display: flex;
  width: 90%;
`;

const RecentNoticeList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0;
`;

const RecentNoticeItem = styled.li`
  padding: 10px 10px;
  display: flex;
  width: 96%;
  border-bottom: 1px solid ${colors.mint[1]};
  transition: 0.3s;

  &:first-child {
    border-top: 1px solid ${colors.mint[1]};
  }

  &:hover {
    background-color: ${colors.gray[1]};
    transition: 0.3s;
  }
`;

const RecentNoticeCardTitle = styled.p`
  flex: 2;
  font-weight: 500;
  cursor: pointer;
`;

const RecentNoticeCardDate = styled.p`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  font-weight: 300;
  font-size: 0.8rem;
`;

const RecentNotice = ({ notices }) => {
  return (
    <RecentNoticeBlock>
      <NoticeContainerTitle>
        <StyledLink to="/boards/notice">Recent Notices</StyledLink>
      </NoticeContainerTitle>
      <MainNoticeContents>
        <RecentNoticeList>
          {notices?.map((notice) => (
            <RecentNoticeItem key={notice.postId}>
              <RecentNoticeCardTitle>
                <StyledLink to={`/${MENU.POST}/${notice.postId}`}>
                  {notice.title}
                </StyledLink>
              </RecentNoticeCardTitle>
              <RecentNoticeCardDate>
                {getFullCurrentDateString(notice.createdAt)}
              </RecentNoticeCardDate>
            </RecentNoticeItem>
          ))}
        </RecentNoticeList>
      </MainNoticeContents>
    </RecentNoticeBlock>
  );
};

export default RecentNotice;
