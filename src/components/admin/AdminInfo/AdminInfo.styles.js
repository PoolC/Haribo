import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';

export const AdminInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  flex: 4;
  border-radius: 50px;
  padding: 30px 0px;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > label {
    margin: 2rem 0 1rem 0;
    font-weight: 600;
  }
  & > input {
    height: 2rem;
    width: 15rem;
    outline: 0;
  }
`;

export const StyledActionButton = styled(ActionButton)`
  height: 2rem;
  width: 15rem;
  margin: 2rem 0;
`;

export const ImageContainer = styled.div`
  margin: 2rem 0;
`;

export const ImageContainerHeader = styled.header`
  font-weight: 600;
`;

export const Description = styled.p`
  color: ${colors.brown[0]};
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;