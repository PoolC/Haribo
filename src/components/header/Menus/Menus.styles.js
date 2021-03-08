import styled, { css } from 'styled-components';
import colors from '../../../lib/styles/colors';
import LinkButton from '../../common/Buttons/LinkButton';

export const MenuBlock = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    background-color: ${colors.gray[0]};
    flex-direction: column;
    z-index: 10;
    position: absolute;
    left: 0;
    right: 0;
    top: -360px;
    padding-bottom: 1.2rem;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
`;

export const LeftHeaderMenu = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: flex-start;
  & > .right-menu {
    @media (min-width: 769px) {
      display: none;
    }
    @media (max-width: 768px) {
      display: flex;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const RightHeaderMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SelectedLinkButton = styled(LinkButton)`
  color: ${colors.brown[1]};
`;
