import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';

const FooterBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 5%;
  color: ${colors.brown[1]};
  background-color: ${colors.gray[1]};
  margin-top: 30px;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const FooterItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterContentText = styled.p`
  font-size: 0.8rem;
  margin: 0 0.3rem;
  word-break: keep-all;
  line-height: 1.2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterIcon = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.1rem;
  font-size: 0.8rem;
`;

const FooterDivider = styled.div`
  height: 100px;
  width: 1px;
  margin: 0 10px;
  background-color: ${colors.mint[1]};
  @media (max-width: 576px) {
    width: 50%;
    margin: 30px 0;
    height: 1px;
  }
`;

const Footer = ({ info }) => {
  const { president, location, phoneNumber } = info;
  const date = new Date();
  const thisYear = date.getFullYear();
  return (
    <FooterBlock>
      <FooterItem>
        <h3 className="contact_title">Contact</h3>
        <br />
        <FooterContent>
          <FooterIcon className="fas fa-map-marker-alt footer_icon"></FooterIcon>
          <FooterContentText>{location}</FooterContentText>
        </FooterContent>
        <FooterContent>
          <FooterIcon className="fas fa-envelope footer_icon"></FooterIcon>
          <FooterContentText>poolc.official@gmail.com</FooterContentText>
        </FooterContent>
        <FooterContent>
          <FooterIcon className="fas fa-phone-alt footer_icon"></FooterIcon>
          <FooterContentText>
            회장 {president} {phoneNumber}
          </FooterContentText>
        </FooterContent>
      </FooterItem>
      <FooterDivider className="divider" />
      <FooterItem>
        <FooterContent>
          <FooterContentText style={{ textAlign: 'center' }}>
            회원가입은 매 학기 초마다 지정된 시기에 받고 있습니다.
            <br />
            프로그래밍에 관심이 있는 모든 학우분들의 연락을 환영합니다.
          </FooterContentText>
        </FooterContent>
        <br />
        <FooterContent>
          <FooterContentText>
            구인/홍보 문의는 이메일로 연락주시기 바랍니다.
          </FooterContentText>
        </FooterContent>
      </FooterItem>
      <FooterDivider />
      <FooterItem>
        <div className="detail_content">
          <FooterContentText>
            <a href="http://poolc.github.io/Regulation/">동아리 회칙 </a>
            <span>&nbsp;|&nbsp;</span>
            <a href="https://github.com/PoolC"> GitHub</a>
          </FooterContentText>
        </div>
        <div className="footer_rights_content">
          <FooterContentText>
            ⓒ {thisYear} All Rights Reserved. PoolC
          </FooterContentText>
        </div>
      </FooterItem>
    </FooterBlock>
  );
};

export default Footer;
