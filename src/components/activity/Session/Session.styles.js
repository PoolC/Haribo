import styled from 'styled-components';
import colors from '../../../lib/styles/colors';

export const SessionCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 20px 0 10px 0;
  list-style: none;
`;

export const SessionDivider = styled.div`
  margin-top: 30px;
  width: 50px;
  height: 1px;
  background-color: ${colors.mint[1]};
`;

export const SessionNumber = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Date = styled.p`
  font-weight: 300;
  font-size: 0.8rem;
  margin-bottom: 10px;
`;

export const Description = styled.p``;

export const AttendanceList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h5 {
    font-size: 0.9rem;
    margin: 10px 0;
    font-weight: 500;
  }
`;

export const Attendance = styled.li`
  font-size: 0.8rem;
  margin: 2px;
  font-weight: 300;
  list-style: none;
`;