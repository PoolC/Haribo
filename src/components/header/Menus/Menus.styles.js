import styled, { css, keyframes } from 'styled-components';
import colors from '../../../lib/styles/colors';
import LinkButton from '../../common/Buttons/LinkButton';

const slideUp = keyframes`
  from {
    height: 360px;
  }
  to {
    height: 0px;
    }
`;

const slideDown = keyframes`
  from {
    height: 0px;
  }
  to {
    height: 360px;
    }
`;

export const MenuBlock = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    z-index: 10;
    /* display: ${(props) => (props.disappear ? 'none' : 'flex')}; */
    height: ${(props) => props.disappear && '0px'};
    transition: 0.25s ease-out;

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${slideDown};
    animation-fill-mode: forwards;

    ${(props) =>
      props.disappear &&
      css`
        animation-name: ${slideUp};
      `}
  }
`;

export const LeftHeaderMenu = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 768px) {
    display: ${(props) => (props.disappear ? 'none' : 'flex')};
    height: ${(props) => props.disappear && '0px'};
    flex-direction: column;
  }
`;

export const RightHeaderMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    display: ${(props) => (props.disappear ? 'none' : 'flex')};
    height: ${(props) => props.disappear && '0px'};
    flex-direction: column;
  }
`;

export const SelectedLinkButton = styled(LinkButton)`
  color: ${colors.brown[1]};
`;
