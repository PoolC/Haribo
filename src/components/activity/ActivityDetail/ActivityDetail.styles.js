import styled from 'styled-components';
import colors from '../../../lib/styles/colors';

export const ActivityDetailContainer = styled.div`
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  border-radius: 50px;
  padding: 80px 0px;
  & > .project_container_title {
    font-weight: 700;
    margin-bottom: 30px;
    max-width: 1200px;
  }
`;

export const TitleContainer = styled.div`
  margin: 0px 0 40px 0;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  h2 {
    color: ${colors.brown[0]};
    margin-bottom: 10px;
    font-weight: 300;
    font-size: 0.8rem;
  }
`;

export const Content = styled.p`
  margin-bottom: 0.5rem;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  h2 {
    color: ${colors.brown[0]};
    margin-bottom: 10px;
    font-weight: 300;
    font-size: 0.8rem;
  }
`;

export const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  h2 {
    color: ${colors.brown[0]};
    margin-bottom: 10px;
    font-weight: 300;
    font-size: 0.8rem;
  }
`;

export const MemberContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  h2 {
    color: ${colors.brown[0]};
    margin-bottom: 10px;
    font-weight: 300;
    font-size: 0.8rem;
  }
`;

export const Member = styled.ul`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  list-style: none;
`;

export const SessionBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  h2 {
    color: ${colors.brown[0]};
    margin-bottom: 0px;
    font-weight: 300;
    font-size: 0.8rem;
  }
`;

export const Sessions = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

export const TagList = styled.ul`
  display: flex;
`;

export const TagCard = styled.li`
  cursor: default;
  background-color: ${colors.gray[0]};
  border: 1px solid ${colors.mint[1]};
  border-radius: 2px;
  font-size: 0.9rem;
  font-weight: 300;
  padding: 2px;
  margin: 5px;
  list-style: none;
`;
