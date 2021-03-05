import styled from 'styled-components';

export const CommentFormBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0 0 0;
  width: 100%;
`;

export const StyledInput = styled.input`
  flex: 1;
  height: 2rem;
  outline: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 4rem;
  justify-content: flex-end;
  & > button {
    margin: 0;
  }
`;
