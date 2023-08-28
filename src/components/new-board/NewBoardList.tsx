import {
  Button,
  Pagination,
  Result,
  Skeleton,
  Space,
  Table,
  Typography,
} from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Link, useHistory } from 'react-router-dom';
import { MENU } from '~/constants/menus';
import { GoPencil } from 'react-icons/go';
import { FcLike } from 'react-icons/fc';
import { FaRegCommentAlt } from 'react-icons/fa';
import { createStyles } from 'antd-style';
import { PostControllerService, PostResponse, queryKey } from '~/lib/api-v2';
import { useQuery } from '@tanstack/react-query';
import { match } from 'ts-pattern';
import { stringify } from 'qs';

const useStyles = createStyles(({ css }) => ({
  fullWidth: css`
    width: 100%;
  `,
  metaInfoArea: css`
    width: 100%;
    justify-content: space-between;
  `,
  search: css`
    max-width: 300px;
  `,
  link: css`
    display: block;
    width: 100%;
  `,
  topArea: css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,
  wrapper: css`
    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: 8px;
  `,
  paginationWrap: css`
    display: flex;
    justify-content: center;
    margin-top: 10px;
  `,
}));

export default function NewBoardList({
  boardId,
  page,
}: {
  boardId: number;
  page: number;
}) {
  // data
  const { styles } = useStyles();

  const boardListQuery = useQuery({
    queryKey: queryKey.post.all(boardId, page),
    queryFn: () =>
      PostControllerService.viewPostByBoardUsingGet({ boardId, page }),
  });

  const history = useHistory();

  // methods
  const onPageChange = (page: number) =>
    history.push(
      `/${MENU.NEW_BOARDS}?${stringify({
        boardId,
        page,
      })}`,
    );

  // template
  const columns: ColumnsType<PostResponse> = [
    {
      render: (_, post) => (
        <Link to={`${MENU.NEW_BOARD}/${post.postId}`} className={styles.link}>
          <Space
            direction={'vertical'}
            className={styles.fullWidth}
            size={'middle'}
          >
            <Space className={styles.metaInfoArea} size={'middle'}>
              <Space>
                <Typography.Text>{post.writerName}</Typography.Text>
                <Typography.Text type={'secondary'}>
                  {post.createdAt}
                </Typography.Text>
              </Space>
              <Space size={'middle'}>
                <Space>
                  <FcLike />
                  {post.likeCount}
                </Space>
                <Space>
                  <FaRegCommentAlt />
                  {post.commentCount ?? 0}
                </Space>
              </Space>
            </Space>
            <Space direction={'vertical'} size={0}>
              <Typography.Title level={5}>{post.title}</Typography.Title>
              <Typography.Text>{post.body}</Typography.Text>
            </Space>
          </Space>
        </Link>
      ),
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.topArea}>
        <Link to={`${MENU.NEW_BOARD}/write/${stringify({ boardId })}`}>
          <Button type={'primary'} icon={<GoPencil />}>
            글쓰기
          </Button>
        </Link>
      </div>
      {match(boardListQuery)
        .with({ status: 'loading' }, () => <Skeleton />)
        .with({ status: 'error' }, () => (
          <Result status="500" subTitle="에러가 발생했습니다." />
        ))
        .with({ status: 'success' }, ({ data: postList }) => (
          <>
            <Table
              dataSource={postList}
              columns={columns}
              showHeader={false}
              pagination={false}
            />
            <div className={styles.paginationWrap}>
              <Pagination
                total={100}
                showSizeChanger={false}
                onChange={onPageChange}
              />
            </div>
          </>
        ))
        .exhaustive()}
    </div>
  );
}
