import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../../lib/styles/colors';

export const PageList = styled.ul`
  position: absolute;
  bottom: 1.5rem;
  display: flex;
`;

export const PageItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px 5px;
  color: ${(props) =>
    props.selected ? `${colors.brown[1]}` : `${colors.brown[0]}`};
  width: 20px;
  height: 20px;
  cursor: pointer;
  font-size: 0.8rem;
  background-color: ${(props) =>
    props.selected ? `${colors.mint[6]}` : `none`};
  border-radius: 50%;
  transition: 0.25s ease-in;
  text-decoration: none;
  &:hover {
    color: ${colors.brown[1]};
    background-color: ${(props) =>
      props.selected ? `${colors.mint[6]}` : `${colors.mint[0]}`};
    transition: 0.25s ease-in;
    text-decoration: none;
  }
`;

export const PageButton = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px 5px;
  color: ${colors.brown[0]};
  width: 36px;
  height: 20px;
  cursor: pointer;
  font-size: 0.7rem;
  background-color: ${colors.mint[0]};
  border-radius: 5px;
  transition: 0.25s ease-in;

  &:hover {
    color: ${colors.brown[1]};
    background-color: ${colors.mint[6]};
    transition: 0.25s ease-in;
  }
`;
