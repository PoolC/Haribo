import styled from 'styled-components';
import LinkButton from '../../common/Buttons/LinkButton';
import colors from '../../../lib/styles/colors';

export const AdminMenuBlock = styled.div`
  width: 12rem;
  margin: 0 20px 20px 0;
  padding: 0;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const AdminMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.035);
  border-radius: 50px;
  padding: 30px 30px;
  margin: 0;
  @media (max-width: 1000px) {
    align-items: center;
  }
`;

export const AdminMenuItem = styled.li`
  height: 2.5rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
`;

export const SelectedLinkButton = styled(LinkButton)`
  color: ${colors.brown[1]};
`;