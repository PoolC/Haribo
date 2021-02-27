import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';
import React from 'react';
import styled from 'styled-components';
import { MENU } from '../../../constants/menus';

const AdminProjectsBlock = styled.div`
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
  & > .project_list_head {
    flex: 1;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ProjectListRow = styled.tr`
  cursor: default;
  display: flex;
  padding: 0.5rem 0;
  transition: 0.3s;
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
  & > .project-list-row {
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

const AdminProject = ({ projects, onDeleteProject }) => {
  const handleDelete = (e, projectID) => {
    e.preventDefault();
    onDeleteProject(projectID);
  };
  return (
    <AdminProjectsBlock>
      <TitleContainer>프로젝트 관리</TitleContainer>
      <ButtonContainer>
        <ActionButton to={`/${MENU.ADMIN}/projects/new`}>
          프로젝트 생성
        </ActionButton>
      </ButtonContainer>
      <ContentsContainer>
        <Table>
          <thead>
            <TableHead>
              <th className="project_list_head">이름</th>
              <th className="project_list_head">장르</th>
              <th className="project_list_head">동작</th>
            </TableHead>
          </thead>
          <tbody>
            {projects.map((project) => (
              <ProjectListRow key={project.id}>
                <td className="project-list-row">{project.name}</td>
                <td className="project-list-row">{project.genre}</td>
                <td className="project-list-row">
                  <ActionButton
                    to={`/${MENU.ADMIN}/projects/edit/${project.id}`}
                  >
                    편집
                  </ActionButton>
                  <ActionButton onClick={(e) => handleDelete(e, project.id)}>
                    삭제
                  </ActionButton>
                </td>
              </ProjectListRow>
            ))}
          </tbody>
        </Table>
      </ContentsContainer>
    </AdminProjectsBlock>
  );
};

export default AdminProject;
