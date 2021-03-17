import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';

export const PostContainer = styled.div`
  display: flex;
  width: 90%;
  max-width: 90%;
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
  font-size: 1.6rem;
  font-weight: 600;
  word-break: keep-all;
  line-height: 2.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
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
  word-break: break-all;
  line-height: 1.5rem;
  max-width: 100%;
  overflow: scroll;
  color: ${colors.brown[1]};
  p,
  ul,
  ol {
    font-weight: 300;
    font-size: 0.9rem;
    color: ${colors.brown[1]};
  }
  ul,
  ol {
    padding-left: 1.5rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1rem 0;
    line-height: 2.2rem;
    color: ${colors.brown[1]};
  }
  hr {
    margin: 1rem 0;
  }
  img {
    max-width: 600px;
    margin: 1rem 0;
  }
  p {
    margin: 0.5rem 0;
  }
  a {
    max-width: 100%;
    word-break: break-all;
  }
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
