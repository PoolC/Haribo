import styled from '@emotion/styled';
import colors from '../../lib/styles/colors';

export const TwoColumnsContainerBlock = styled.div`
  position: relative;
  top: 0px;
  width: 90%;
  left: 5%;
  right: 5%;
  display: flex;
  margin: 0;
  @media (max-width: 768px) {
    margin-bottom: 500px;
    flex-direction: column;
  }
`;

export const Block = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  justify-content: center;
  margin: 0px 0 300px 0;
  @media (max-width: 768px) {
    margin-bottom: 500px;
  }
`;

export const WhiteBlock = styled.div`
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0 0 20px ${colors.gray[1]};
  border-radius: 50px;
  padding: ${(props) => (props.dense ? '30px 0' : '60px 0')};
  min-height: 50vh;
  max-width: 1366px;
  & > .block_title {
    margin-bottom: 3rem;
  }
`;

export const WhiteNarrowBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  flex: 1;
  border-radius: 50px;
  padding: 40px 20px;
  min-height: 50vh;
`;
