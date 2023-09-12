import React from 'react';
import {
  Avatar,
  Breadcrumb,
  Button,
  Checkbox,
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
import { BoardType, getBoardTitleByBoardType } from '~/lib/utils/boardUtil';
import { useSearchParams } from '~/hooks/useSearchParams';
import { stringify } from 'qs';

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
    align-items: center;
    gap: 16px;
  `,
  whiteBlock: css`
    padding: 30px 0;
  `,
  actionButtonGroup: css`
    justify-content: flex-end;
    align-items: center;
    width: 100%;
  `,
}));

/**
 * TODO
 * - 권한 체크
 * - 댓글 작업
 * */
export default function BoardDetailPage() {
  const { styles } = useStyles();
  const searchParams = useSearchParams();
  const boardType = (searchParams.get('boardType') ?? 'NOTICE') as BoardType;

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
              { title: <Link to={`/${MENU.BOARD}`}>게시판</Link> },
              {
                title: (
                  <Link to={`/${MENU.BOARD}?${stringify({ boardType })}`}>
                    {getBoardTitleByBoardType(boardType)}
                  </Link>
                ),
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
            <Space className={styles.actionButtonGroup}>
              <Link
                to={`/${MENU.BOARD}/write?${stringify({
                  mode: 'EDIT',
                  boardType: boardType,
                  boardId: 1,
                })}`}
              >
                <Button type={'primary'}>수정</Button>
              </Link>
              <Button type={'primary'} danger>
                삭제
              </Button>
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
            <form>
              <Space direction={'vertical'} className={styles.fullWidth}>
                <Input.TextArea
                  className={styles.commentTextArea}
                  placeholder="댓글을 남겨주세요 :)"
                />
                <div className={styles.commentButtonWrap}>
                  <Checkbox>익명</Checkbox>
                  <Button type={'primary'}>댓글 달기</Button>
                </div>
              </Space>
            </form>
          </Space>
        </Space>
      </WhiteBlock>
    </Block>
  );
}
