import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';

export const PostContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;
  font-size: 2rem;
  font-weight: 600;
  word-break: keep-all;
  line-height: 2.5rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  font-weight: 300;
  font-size: 0.9rem;
  color: ${colors.brown[0]};
  padding: 5px 0 20px 0;
  border-bottom: 1px solid ${colors.mint[0]};
  & > div {
    display: flex;
    align-items: center;
    width: 1px;
    height: 0.9rem;
    background-color: ${colors.brown[0]};
    margin: 0 0.5rem;
  }
`;

export const BodyContainer = styled.div`
  width: 100%;
  padding: 40px 0 20px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 10px 0 20px 0;
  border-bottom: 1px solid ${colors.mint[0]};
`;

export const CommentsContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled(ActionButton)`
  margin: 0 0 0 15px;
  &.modify {
    background-color: ${colors.brown[0]};
    &:hover {
      background-color: ${colors.brown[1]};
    }
  }
  &.delete {
    background-color: ${colors.red[0]};
    &:hover {
      background-color: ${colors.red[1]};
    }
  }
`;
