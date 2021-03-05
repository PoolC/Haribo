import styled from 'styled-components';
import colors from '../../lib/styles/colors';

export const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 5%;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  margin-bottom: 0px;
  max-width: 1366px;
  margin: auto;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 40px;
    background-color: ${colors.gray[0]};
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    transition: 0.25s ease-out;
    box-shadow: 0 0 20px ${colors.gray[1]};
  }
`;

export const HeaderIcons = styled.div`
  color: ${colors.brown[0]};
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }
`;

export const LogoImage = styled.img`
  height: auto;
  width: auto;
  max-width: 20px;
  cursor: pointer;
  margin-right: 10px;
`;

export const BarsIcon = styled.i`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
  &:hover {
    color: ${colors.brown[1]};
  }
`;
