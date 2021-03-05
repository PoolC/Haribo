import styled from 'styled-components';
import colors from '../../../lib/styles/colors';

export const ProjectListBlock = styled.div`
  position: relative;
  top: 0px;
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  margin: 0px 0 300px 0;
  @media (max-width: 576px) {
    margin-bottom: 500px;
  }
`;

export const ProjectListContainer = styled.div`
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  border-radius: 50px;
  padding: 30px 10px 50px 10px;
  & > .project_container_title {
    font-weight: 700;
    margin-bottom: 30px;
    max-width: 1200px;
  }
`;

export const Project = styled.ul`
  width: 90%;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  max-width: 1200px;
  @media (max-width: 576px) {
    flex-flow: column;
  }
`;