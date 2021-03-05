import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import { Link } from 'react-router-dom';

export const RecentProjectBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 0px 0 300px 0;
  max-width: 1366px;
  @media (max-width: 576px) {
    margin-bottom: 600px;
  }

  & > .project_container_title {
    padding-left: 20px;
    width: 90%;
    font-weight: 700;
    margin-bottom: 30px;
    color: ${colors.brown[1]};
  }
`;

export const StyledLink = styled(Link)`
  color: ${colors.brown[1]};
`;

export const RecentProjectList = styled.ul`
  width: 90%;
  display: flex;
  align-items: center;
  overflow: scroll;
  scrollbar-color: none;
  margin: 0;
  padding: 0;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;