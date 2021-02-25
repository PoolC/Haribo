import styled from 'styled-components';
import colors from '../../lib/styles/colors';

export const AuthFormBlock = styled.div`
  position: relative;
  top: 0px;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0px 0 300px 0;
  @media (max-width: 576px) {
    margin-bottom: 500px;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  border-radius: 50px;
  padding: 40px 40px 60px 40px;
  min-height: 60vh;
`;

export const FormListHeader = styled.header`
  display: flex;
  align-items: center;
  margin: auto;
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

export const FormList = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  & > label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0 8px 0;
    font-size: 0.8rem;
    width: 100%;
  }
  & > input:disabled {
    background-color: ${colors.gray[1]};
  }
`;

export const Warning = styled.span`
  opacity: ${(props) => (props.error ? '100%' : '0%')};
  color: ${colors.red[1]};
  transition: 0.3s ease-in;
`;

export const StyledInput = styled.input`
  border: 1px solid ${colors.brown[0]};
  height: 2rem;
  border-radius: 2px;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 320px;
  outline: ${colors.gray[1]};
  box-shadow: ${(props) => props.error && `0 0 5px ${colors.red[0]}`};
  transition: 0.3s ease-in;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  margin: 40px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 320px;
  height: 2rem;
  background-color: ${colors.mint[1]};
  color: white;
  border-radius: 12px;
  font-weight: 600;
  transition: 0.3s;
  &:hover {
    background-color: ${colors.mint[2]};
    transition: 0.3s;
  }
`;

export const StyledTextarea = styled.textarea`
  outline: 0;
`;
