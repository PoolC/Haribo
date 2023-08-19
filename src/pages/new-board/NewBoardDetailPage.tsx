import React from 'react';
import {
  Avatar,
  Breadcrumb,
  Button,
  Divider,
  Input,
  Space,
  Tooltip,
  Typography,
} from 'antd';
import { Block, WhiteBlock } from '~/styles/common/Block.styles';
import { Link } from 'react-router-dom';
import { MENU } from '~/constants/menus';
import { FcLike } from 'react-icons/fc';
import { BsFillStarFill } from 'react-icons/bs';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css }) => ({
  wrapper: css`
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  `,
  fullWidth: css`
    width: 100%;
  `,
  writerAvatar: css`
    width: 50px;
    height: 50px;
  `,
  commentTextArea: css`
    min-width: 120px;
    resize: none;
  `,
  buttonGroup: css`
    justify-content: center;
    align-items: center;
    width: 100%;
  `,
  commentButtonWrap: css`
    display: flex;
    justify-content: flex-end;
  `,
  whiteBlock: css`
    padding: 30px 0;
  `,
}));

export default function NewBoardDetailPage() {
  const { styles } = useStyles();

  return (
    <Block>
      <WhiteBlock className={styles.whiteBlock}>
        <Space
          direction={'vertical'}
          size={0}
          className={styles.wrapper}
          split={<Divider />}
        >
          <Breadcrumb
            items={[
              { title: <Link to={`/${MENU.NEW_BOARDS}`}>게시판</Link> },
              {
                title: <Link to={`/${MENU.NEW_BOARDS}`}>자유게시판</Link>,
              },
            ]}
          />
          <Space
            direction={'vertical'}
            size={'middle'}
            className={styles.fullWidth}
          >
            <Space align={'center'}>
              <Avatar className={styles.writerAvatar} />
              <Space direction={'vertical'} size={0}>
                <Typography.Text>글쓴이</Typography.Text>
                <Typography.Text type={'secondary'}>
                  2023. 07. 28
                </Typography.Text>
              </Space>
            </Space>
            <Space direction={'vertical'} size={0}>
              <Typography.Title level={2}>제목입니다.</Typography.Title>
              <Typography.Text>내용이 입력됩니다</Typography.Text>
            </Space>
            <Space className={styles.buttonGroup}>
              <Tooltip title={'좋아요'}>
                <Button icon={<FcLike />}>0</Button>
              </Tooltip>
              <Tooltip title={'스크랩'}>
                <Button icon={<BsFillStarFill color={'orange'} />}>0</Button>
              </Tooltip>
            </Space>
          </Space>
          <Space
            direction={'vertical'}
            size={'large'}
            className={styles.fullWidth}
          >
            <Space align={'start'}>
              <Avatar />
              <Space direction={'vertical'} size={0}>
                <Typography.Text>풀씨짱123</Typography.Text>
                <Typography.Text>유익한 글이군요</Typography.Text>
                <Typography.Text type={'secondary'}>
                  2023. 07. 28
                </Typography.Text>
              </Space>
            </Space>
            <Space direction={'vertical'} className={styles.fullWidth}>
              <Input.TextArea
                className={styles.commentTextArea}
                placeholder="댓글을 남겨주세요 :)"
              />
              <div className={styles.commentButtonWrap}>
                <Button type={'primary'}>댓글 달기</Button>
              </div>
            </Space>
          </Space>
        </Space>
      </WhiteBlock>
    </Block>
  );
}
