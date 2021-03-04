import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';
import React from 'react';
import styled from 'styled-components';

const AdminActivitiesBlock = styled.div`
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
  margin: 0;
  padding: 0.8rem 0px;
  font-size: 0.9rem;
  & > .activity_list_head {
    flex: 1;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ActivityListRow = styled.tr`
  cursor: default;
  display: flex;
  padding: 0.5rem 0;
  transition: 0.3s;
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
  & > .activity-list-row {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
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

const AdminActivity = ({
  activities,
  onOpenActivity,
  onCloseActivity,
  onDeleteActivity,
}) => {
  console.log(activities);
  const handleClose = (e, activityID) => {
    e.preventDefault();
    onCloseActivity(activityID);
  };

  const handleOpen = (e, activityID) => {
    e.preventDefault();
    onOpenActivity(activityID);
  };

  const handleDelete = (e, activityID) => {
    e.preventDefault();
    onDeleteActivity(activityID);
  };

  return (
    <AdminActivitiesBlock>
      <TitleContainer>세미나/스터디 관리</TitleContainer>
      <ContentsContainer>
        <Table>
          <thead>
            <TableHead>
              <th className="activity_list_head">이름</th>
              <th className="activity_list_head">주최자</th>
              <th className="activity_list_head">시작일</th>
              <th className="activity_list_head">종류</th>
              <th className="activity_list_head">신청 가능 여부</th>
              <th className="activity_list_head">동작</th>
            </TableHead>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <ActivityListRow key={activity.id}>
                <td className="activity-list-row">{activity.title}</td>
                <td className="activity-list-row">{activity.host.name}</td>
                <td className="activity-list-row">{activity.startDate}</td>
                <td className="activity-list-row">
                  {activity.seminar ? '세미나' : '스터디'}
                </td>
                <td className="activity-list-row">
                  {activity.available ? 'o' : 'x'}
                </td>
                <td className="activity-list-row">
                  {activity.available ? (
                    <ActionButton onClick={(e) => handleClose(e, activity.id)}>
                      닫기
                    </ActionButton>
                  ) : (
                    <ActionButton onClick={(e) => handleOpen(e, activity.id)}>
                      열기
                    </ActionButton>
                  )}
                  <ActionButton onClick={(e) => handleDelete(e, activity.id)}>
                    삭제
                  </ActionButton>
                </td>
              </ActivityListRow>
            ))}
          </tbody>
        </Table>
      </ContentsContainer>
    </AdminActivitiesBlock>
  );
};

export default AdminActivity;
