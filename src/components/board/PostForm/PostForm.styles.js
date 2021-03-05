import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';

export const PostFormBlock = styled.div`
  flex: 4;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  border-radius: 50px;
  padding: 40px 40px 60px 40px;
`;

export const TitleInput = styled.input`
  font-size: 2rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${colors.gray[1]};
  margin-bottom: 2rem;
  width: 90%;
`;

export const EditorWrapper = styled.div`
  width: 90%;
`;

export const PostButtonContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: flex-end;
  margin-top: 2rem;
`;

export const StyledActionButton = styled(ActionButton)`
  height: 2rem;
  margin: 0 0 0 1rem;
  &.file {
    background-color: ${colors.mint[2]};
    &:hover {
      background-color: ${colors.mint[3]};
    }
  }
  &.submit {
    background-color: ${colors.mint[2]};
    &:hover {
      background-color: ${colors.mint[3]};
    }
  }
  &.cancel {
    background-color: ${colors.red[0]};
    &:hover {
      background-color: ${colors.red[1]};
    }
  }
`;

export const BoardName = styled.h2`
  display: flex;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 700;
  width: 90%;
`;