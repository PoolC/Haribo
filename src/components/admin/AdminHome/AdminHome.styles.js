import styled from 'styled-components';
import colors from '../../../lib/styles/colors';

export const AdminHomeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  flex: 4;
  border-radius: 50px;
  padding: 30px 40px;
`;

export const TitleContainer = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  margin: 2rem 0 3rem 0;
  word-break: keep-all;
  text-align: center;
  line-height: 2rem;
`;

export const ContentsContainer = styled.div`
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  p {
    margin-bottom: 0.5rem;
    word-break: keep-all;
    text-align: center;
    line-height: 1.2rem;
    font-size: 0.9rem;
    font-weight: 300;
  }
  h2 {
    font-size: 1.4rem;
    font-weight: 500;
    margin: 2rem 0;
  }
`;