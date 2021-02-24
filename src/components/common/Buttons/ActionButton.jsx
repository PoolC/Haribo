import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../../lib/styles/colors';

const StyledActionButton = styled.button`
  background-color: ${colors.mint[1]};
  color: ${colors.gray[0]};
  padding: 5px 12px;
  margin: 0 10px;
  border-radius: 8px;
  transition: 0.3s;
  font-weight: 700;
  font-size: 0.8rem;
  &:hover {
    background-color: ${colors.mint[2]};
    transition: 0.3s;
  }
`;

const StyledActionButtonLink = styled(Link)`
  background-color: ${colors.mint[1]};
  color: ${colors.gray[0]};
  padding: 8px 12px;
  margin: 0 10px;
  border-radius: 8px;
  transition: 0.3s;
  font-weight: 700;
  font-size: 0.8rem;
  &:hover {
    text-decoration: none;
    background-color: ${colors.mint[2]};
    transition: 0.3s;
  }
`;

const ActionButton = (props) => {
  return props.to ? (
    <StyledActionButtonLink {...props} />
  ) : (
    <StyledActionButton {...props} />
  );
};

export default ActionButton;
