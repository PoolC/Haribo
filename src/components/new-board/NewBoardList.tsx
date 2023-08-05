import { Button, Input, Pagination, Space, Table, Typography } from 'antd';
import React from 'react';
import { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { MENU } from '~/constants/menus';
import { GoPencil } from 'react-icons/go';
import { FcLike } from 'react-icons/fc';
import { FaRegCommentAlt } from 'react-icons/fa';
import { createStyles } from 'antd-style';

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
    justify-content: space-between;
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

type DataType = {
  key: string;
  title: string;
  content: string;
  createdAt: string;
};

export default function NewBoardList() {
  const { styles } = useStyles();

  const dataSource: DataType[] = [
    {
      key: '1',
      title: '질문 있습니다',
      content: 'html은 프로그래밍 언어인가요?',
      createdAt: '2023. 07. 28',
    },
    {
      key: '2',
      title: '질문 있습니다',
      content: 'html은 프로그래밍 언어인가요?',
      createdAt: '2023. 07. 28',
    },
    {
      key: '3',
      title: '질문 있습니다',
      content: 'html은 프로그래밍 언어인가요?',
      createdAt: '2023. 07. 28',
    },
  ];

  const columns: ColumnsType<DataType> = [
    {
      render: (_, { title, content, key, createdAt }) => (
        <Link to={`${MENU.NEW_BOARD}/${key}`} className={styles.link}>
          <Space
            direction={'vertical'}
            className={styles.fullWidth}
            size={'middle'}
          >
            <Space className={styles.metaInfoArea} size={'middle'}>
              <Space>
                <Typography.Text>작성자</Typography.Text>
                <Typography.Text type={'secondary'}>
                  {createdAt}
                </Typography.Text>
              </Space>
              <Space size={'middle'}>
                <FcLike />
                <FaRegCommentAlt />
              </Space>
            </Space>
            <Space direction={'vertical'} size={0}>
              <Typography.Title level={5}>{title}</Typography.Title>
              <Typography.Text>{content}</Typography.Text>
            </Space>
          </Space>
        </Link>
      ),
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.topArea}>
        <Input.Search allowClear className={styles.search} />
        <Link to={`${MENU.NEW_BOARD}/write`}>
          <Button type={'primary'} icon={<GoPencil />}>
            글쓰기
          </Button>
        </Link>
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        showHeader={false}
        pagination={false}
      />
      <div className={styles.paginationWrap}>
        <Pagination total={100} showSizeChanger={false} />
      </div>
    </div>
  );
}
