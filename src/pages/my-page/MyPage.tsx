import { Block, WhiteBlock } from '~/styles/common/Block.styles';
import { Avatar, Image, List, Progress, Space, Typography } from 'antd';
import { JSX } from 'react';
import { createStyles } from 'antd-style';
import { AiFillMessage } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BsFillPencilFill, BsFillStarFill } from 'react-icons/bs';
import { BiSolidUser } from 'react-icons/bi';
import { IoIosArrowForward } from 'react-icons/io';
import {
  BadgeControllerService,
  MemberControllerService,
  queryKey,
  useAppQueries,
} from '~/lib/api-v2';
import { MENU } from '~/constants/menus';

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
      title: '쪽지',
      icon: <AiFillMessage size={24} color={'#4dabf7'} />,
      link: `/${MENU.MY_PAGE}/${MENU.MY_PAGE_MESSAGE_LIST}`,
    },
  ];

  const [myHourRes, meRes, allBadgesRes] = useAppQueries({
    queries: [
      {
        queryKey: queryKey.member.hour,
        queryFn: MemberControllerService.getMyActivityTimeUsingGet,
      },
      {
        queryKey: queryKey.member.me,
        queryFn: MemberControllerService.getMeUsingGet,
      },
      {
        queryKey: queryKey.badge.badge,
        queryFn: BadgeControllerService.getMyBadgeUsingGet,
      },
    ],
  });

  return (
    <Block>
      <WhiteBlock className={styles.whiteBlock}>
        <Space
          direction={'vertical'}
          className={styles.fullWidth}
          size={'large'}
        >
          <Space className={styles.wrapper} size={'middle'}>
            <Avatar size={80} src={meRes.data?.profileImageURL} />
            <Space direction={'vertical'}>
              <Typography.Text className={styles.userName}>
                {meRes.data?.name}
              </Typography.Text>
              <Typography.Text>풀씨와 함께한지 120일 ❤️</Typography.Text>
            </Space>
          </Space>
          <Space direction="vertical" size={0} className={styles.wrapper}>
            <Typography.Text>
              {myHourRes.data?.hour ?? 0}시간 / 6시간
            </Typography.Text>
            <Progress percent={myHourRes.data?.hour ?? 0} />
          </Space>
          <Space direction="vertical" size={0} className={styles.wrapper}>
            <Typography.Title level={5}>풀씨 잔디</Typography.Title>
          </Space>
          <Space direction="vertical" size={0} className={styles.wrapper}>
            <Typography.Title level={5}>얻은 뱃지</Typography.Title>
            {allBadgesRes.data?.data?.length ? (
              <Space size={[8, 16]} wrap>
                {allBadgesRes.data?.data.map((el) => (
                  <Image src={el.imageUrl} alt={el.name} key={el.id} />
                ))}
              </Space>
            ) : (
              <Typography.Text>아직 뱃지가 없습니다.</Typography.Text>
            )}
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
