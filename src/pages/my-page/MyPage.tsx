import { Block, WhiteBlock } from '~/styles/common/Block.styles';
import {
  Avatar,
  Button,
  Image,
  List,
  Popover,
  Progress,
  Space,
  Typography,
} from 'antd';
import { JSX } from 'react';
import { createStyles } from 'antd-style';
import { AiFillMessage } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {
  BsFillPencilFill,
  BsFillQuestionCircleFill,
  BsFillStarFill,
} from 'react-icons/bs';
import { BiSolidUser } from 'react-icons/bi';
import { IoIosArrowForward } from 'react-icons/io';
import {
  BadgeControllerService,
  BaekjoonControllerService,
  MemberControllerService,
  queryKey,
  useAppQueries,
} from '~/lib/api-v2';
import { MENU } from '~/constants/menus';
import MyPageGrassSection from '~/components/my-page/MyPageGrassSection';

const useStyles = createStyles(({ css }) => ({
  whiteBlock: css`
    padding: 30px 20px;
  `,
  wrapper: css`
    width: 100%;
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
  grassTitle: css`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
  badgeTitle: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  badgeLink: css`
    font-size: 12px;
    color: #9d9893 !important;
    display: flex;
    align-items: center;
    gap: 5px;
  `,
}));

export default function MyPage() {
  const { styles } = useStyles();
  const listData: { title: string; icon: JSX.Element; link: string }[] = [
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

  const [myHourRes, meRes, allBadgesRes, baekjoonRes] = useAppQueries({
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
      {
        queryKey: queryKey.baekjoon.baekjoon,
        queryFn: BaekjoonControllerService.getMyBaekjoonUsingGet,
      },
    ],
  });

  return (
    <Block>
      <WhiteBlock className={styles.whiteBlock}>
        <Space direction={'vertical'} className={styles.fullWidth} size={40}>
          <Space className={styles.wrapper} size={'middle'}>
            <Avatar size={80} src={meRes.data?.profileImageURL} />
            <Space direction={'vertical'}>
              <Typography.Text className={styles.userName}>
                {meRes.data?.name}님
              </Typography.Text>
              <Typography.Text>풀씨와 함께한지 120일 ❤️</Typography.Text>
            </Space>
          </Space>
          <Space direction="vertical" size={0} className={styles.wrapper}>
            <Typography.Title level={5}>나의 활동시간</Typography.Title>
            <Typography.Text>
              {myHourRes.data?.hour ?? 0}시간 / 6시간
            </Typography.Text>
            <Progress percent={myHourRes.data?.hour ?? 0} />
          </Space>
          <Space direction="vertical" className={styles.wrapper}>
            <Typography.Title level={5} className={styles.grassTitle}>
              풀씨 잔디
              <Popover
                title={'풀씨 잔디란?'}
                content={
                  <Space direction={'vertical'}>
                    <Typography.Text>
                      풀씨-백준 익스텐션을 설치하고
                      <br />
                      백준문제를 풀면 풀씨 잔디를 심을 수 있습니다.
                    </Typography.Text>
                    <a
                      href={
                        'https://chrome.google.com/webstore/detail/poolc-baekjoon-hub/doeamknhlolnflkmhbhkagganhjjbefe?hl=ko'
                      }
                      target={'_blank'}
                      rel="noopener noreferrer"
                    >
                      <Button type={'primary'}>익스텐션 설치하러가기 ✨</Button>
                    </a>
                  </Space>
                }
              >
                <BsFillQuestionCircleFill />
              </Popover>
            </Typography.Title>
            {baekjoonRes.data?.data && (
              <MyPageGrassSection baekjoonData={baekjoonRes.data.data} />
            )}
          </Space>
          <Space direction="vertical" size={0} className={styles.wrapper}>
            <Typography.Title level={5} className={styles.badgeTitle}>
              얻은 뱃지
              <Link
                to={`/${MENU.MY_PAGE}/${MENU.MY_PAGE_BADGE_LIST}`}
                className={styles.badgeLink}
              >
                모든 뱃지보기 <span>&gt;</span>
              </Link>
            </Typography.Title>
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
          <Space direction="vertical" size={0} className={styles.wrapper}>
            <Typography.Title level={5}>나의 메뉴</Typography.Title>
            <List
              size="large"
              className={styles.fullWidth}
              bordered
              dataSource={listData}
              renderItem={(item) => (
                <List.Item>
                  <Link to={item.link} className={styles.link}>
                    <div className={styles.linkInner}>
                      {item.icon}{' '}
                      <Typography.Text>{item.title}</Typography.Text>
                    </div>
                    <IoIosArrowForward size={18} color={'#ced4da'} />
                  </Link>
                </List.Item>
              )}
            />
          </Space>
        </Space>
      </WhiteBlock>
    </Block>
  );
}
