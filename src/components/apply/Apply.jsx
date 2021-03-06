import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import { Block, WhiteBlock } from '../../styles/common/Block.styles';
import ActionButton from '../common/Buttons/ActionButton';

const Title = styled.h2`
  margin-bottom: 2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  & > div {
    margin: 0.5rem;
    font-weight: 300;
    text-align: center;
    line-height: 1.2rem;
    font-size: 0.9rem;
    word-break: keep-all;
  }
`;

const StyledIcon = styled.i`
  font-size: 3rem;
  color: ${colors.red[0]};
`;

const Apply = ({ isSubscriptionPeriod, applyUri, history }) => {
  return (
    <Block>
      <WhiteBlock>
        {isSubscriptionPeriod && <Title>가입 신청서 링크</Title>}
        <Content>
          {isSubscriptionPeriod && (
            <>
              <div>
                아래 버튼을 누르면 가입 신청서 링크로 이동합니다.
                <br />
                해당 링크에서 지원서를 작성해주세요.
              </div>
              <div>
                <a href={applyUri}>
                  <ActionButton>가입 신청서로 이동</ActionButton>
                </a>
              </div>
            </>
          )}
          {!isSubscriptionPeriod && (
            <>
              <div>
                <StyledIcon className="fas fa-exclamation-circle"></StyledIcon>
              </div>
              <div>
                현재 가입 신청 가능 기간이 아닙니다.
                <br />
                자세한 사항은 동아리 회장에게 문의해주세요.
              </div>
            </>
          )}
        </Content>
      </WhiteBlock>
    </Block>
  );
};

export default withRouter(Apply);
