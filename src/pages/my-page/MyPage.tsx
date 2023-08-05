import { Block, WhiteBlock } from '~/styles/common/Block.styles';
import { Avatar, List, Space, Typography } from 'antd';
import React, { JSX } from 'react';
import { createStyles } from 'antd-style';
import { AiFillMessage } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BsFillPencilFill, BsFillStarFill } from 'react-icons/bs';
import { GiHighGrass } from 'react-icons/gi';
import { BiSolidUser } from 'react-icons/bi';
import { IoIosArrowForward } from 'react-icons/io';

const useStyles = createStyles(({ css }) => ({
  whiteBlock: css`
    padding: 30px 20px;
  `,
  wrapper: css`
    width: 100%;
    max-width: 1200px;
    box-sizing: border-box;
  `,
  fullWidth: css`
    width: 100%;
  `,
  link: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-decoration: inherit;
  `,
  linkInner: css`
    display: flex;
    align-items: center;
    gap: 20px;
  `,
  userName: css`
    font-size: 24px;
    font-weight: 700;
    position: relative;

    &:before {
      position: absolute;
      content: '';
      width: 100%;
      height: 7px;
      background-color: #47be9b;
      opacity: 0.5;
      bottom: 0;
      left: 0;
    }
  `,
}));

export default function MyPage() {
  const { styles } = useStyles();
  const data: { title: string; icon: JSX.Element; link: string }[] = [
    {
      title: '회원 정보 수정',
      icon: <BiSolidUser size={24} />,
      link: '/my-info',
    },
    {
      title: '내가 쓴 글',
      icon: <BsFillPencilFill size={24} color={'#ffd43b'} />,
      link: '#',
    },
    {
      title: '내가 스크랩한 글',
      icon: <BsFillStarFill size={24} color={'#ffa94d'} />,
      link: '#',
    },
    {
      title: '나의 백준',
      icon: <GiHighGrass size={24} color={'#69db7c'} />,
      link: '#',
    },
    {
      title: '쪽지',
      icon: <AiFillMessage size={24} color={'#4dabf7'} />,
      link: '#',
    },
  ];

  return (
    <Block>
      <WhiteBlock className={styles.whiteBlock}>
        <Space
          direction={'vertical'}
          className={styles.fullWidth}
          size={'large'}
        >
          <Space className={styles.wrapper} size={'middle'}>
            <Avatar
              size={80}
              src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3"
            />
            <Space direction={'vertical'}>
              <Typography.Text className={styles.userName}>
                최진호님
              </Typography.Text>
              <Typography.Text>풀씨와 함께한지 120일 ❤️</Typography.Text>
            </Space>
          </Space>
          <List
            size="large"
            className={styles.fullWidth}
            bordered
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Link to={item.link} className={styles.link}>
                  <div className={styles.linkInner}>
                    {item.icon} <Typography.Text>{item.title}</Typography.Text>
                  </div>
                  <IoIosArrowForward size={18} color={'#ced4da'} />
                </Link>
              </List.Item>
            )}
          />
        </Space>
      </WhiteBlock>
    </Block>
  );
}
