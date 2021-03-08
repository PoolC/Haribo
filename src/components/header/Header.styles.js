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
    position: sticky;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    background-color: ${colors.gray[0]};
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    transition: 0.25s ease-out;
    box-shadow: 0 0 20px ${colors.gray[1]};
    padding: 0 5%;
    & > .open {
      top: 50px;
      box-shadow: 0px 20px 20px ${colors.gray[1]};
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      transition: all 0.3s ease;
      border-bottom-left-radius: 50px;
      border-bottom-right-radius: 50px;
    }
  }
`;

export const HeaderIcons = styled.div`
  color: ${colors.brown[0]};

  @media (max-width: 768px) {
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${colors.gray[0]};
    position: relative;
    height: 60px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
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
