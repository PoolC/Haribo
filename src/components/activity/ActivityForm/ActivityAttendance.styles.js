import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';

export const ActivityAttendanceBlock = styled.div`
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

export const ActivityDetailContainer = styled.div`
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

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const DateContainer = styled.div`
  margin-bottom: 30px;
`;

export const Date = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    margin-bottom: 10px;
    font-weight: 700;
  }
  input {
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

export const DescriptionContainer = styled.div`
  margin-bottom: 30px;
`;

export const Description = styled.div`
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

export const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    color: ${colors.brown[0]};
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
`;

export const Members = styled.ul`
  margin-bottom: 30px;
`;

export const MemberBlock = styled.li`
  display: flex;
  margin: 5px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledActionButton = styled(ActionButton)`
  width: 160px;
`;