import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';

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
  margin-top: 1rem;
  & > .file {
    height: 2rem;
    margin: 0 0 0 1rem;
    background-color: ${colors.mint[2]};
    &:hover {
      background-color: ${colors.mint[3]};
    }
  }
`;

export const StyledActionButton = styled(ActionButton)`
  height: 2rem;
  margin: 0 0 0 1rem;
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

export const FileContainer = styled.div`
  width: 90%;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  min-height: 2rem;
  border: 1px solid ${colors.gray[2]};
  border-radius: 5px;
  text-align: center;
  word-break: break-all;
  font-size: 0.7rem;
  font-weight: 300;
  box-sizing: border-box;
  padding: 5px 0.5rem;
`;

export const File = styled.p`
  display: flex;
  margin: 5px;
  align-items: center;
  word-break: break-all;
  font-size: 0.7rem;
  & > a {
    font-size: 0.7rem;
    word-break: break-all;
    line-height: 0.8rem;
  }
`;

export const FileContainerTitle = styled.div`
  width: 90%;
  display: flex;
  font-size: 0.7rem;
  margin-top: 1rem;
`;

export const FileDeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  border-radius: 4px;
  color: ${colors.gray[0]};
  font-size: 0.7rem;
  background-color: ${colors.red[0]};
  margin: 0 0.2rem;
  transition: 0.25s ease-in;
  &:hover {
    background-color: ${colors.red[1]};
    transition: 0.25s ease-in;
  }
`;

export const StyledDeleteIcon = styled.i`
  padding: 0;
  font-size: 0.7rem;
  margin: 0;
`;
