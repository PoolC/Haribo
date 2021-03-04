import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';

export const ActivityFormBlock = styled.div`
  position: relative;
  top: 0px;
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  margin: 0px 0 300px 0;
  @media (max-width: 576px) {
    margin-bottom: 500px;
  }
`;

export const ActivityFormContainer = styled.div`
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  border-radius: 50px;
  padding: 80px 10px 120px 10px;
  & > .project_container_title {
    font-weight: 700;
    margin-bottom: 30px;
    max-width: 1200px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 0 40px 0;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledActionButton = styled(ActionButton)`
  width: 160px;
`;

export const ItemContainer = styled.div`
  margin-bottom: 30px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    margin-bottom: 10px;
    font-weight: 700;
  }
  textarea {
    outline: 0;
  }
  p {
    color: ${colors.brown[0]};
    font-size: 0.9rem;
    margin-bottom: 10px;
    word-break: keep-all;
    text-align: center;
    line-height: 1.2rem;
  }
`;

export const StyledInput = styled.input`
  outline: 0;
  border: 1px solid ${colors.brown[0]};
  height: 2rem;
  border-radius: 2px;
  width: 100%;
  max-width: 320px;
  outline: ${colors.gray[1]};
  &.capacity {
    width: 5rem;
    margin-right: 10px;
  }
  &.startDate {
    width: 10rem;
  }
`;

export const Tag = styled.div`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  color: ${colors.mint[2]};
  cursor: pointer;
  background-color: ${colors.gray[1]};
  border: 1px solid ${colors.mint[1]};
  padding: 3px;
  border-radius: 3px;
  &:hover {
    opacity: 0.5;
  }
`;

export const TagListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const TagInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > input {
    width: 8rem;
  }
  & > button {
    margin: 0 0 0 10px;
  }
`;

export const TagListHeader = styled.header`
  margin: 40px 0 10px 0;
  font-weight: 700;
`;

export const HourContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  & > .hour {
    width: 3rem;
  }
  & > input {
    margin-right: 0.5rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  & > button {
    margin: 0;
  }
`;

export const CapacityContainer = styled.div`
  display: flex;
  align-items: center;
  & > input {
    width: 4rem;
  }
  & > span {
    margin-left: 0.5rem;
  }
`;