import React from 'react';
import styled from 'styled-components';
import colors from '../../../lib/styles/colors';

const SpinnerBlock = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;
  margin-bottom: 80vh;
`;

const StyledSpinner = styled.i`
  color: ${colors.mint[1]};
  font-size: 4rem;
`;

const Spinner = () => {
  return (
    <SpinnerBlock>
      <StyledSpinner className="fas fa-spinner fa-10x fa-spin"></StyledSpinner>
    </SpinnerBlock>
  );
};

export default Spinner;
