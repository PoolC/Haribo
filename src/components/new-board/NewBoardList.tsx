import { Button, Input, Space, Table, Typography } from 'antd';
import React from 'react';
import { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { MENU } from '../../constants/menus';
import styled from 'styled-components';
import { GoPencil } from 'react-icons/go';
import { FcLike } from 'react-icons/fc';
import { FaRegCommentAlt } from 'react-icons/fa';

type DataType = {
  key: string;
  title: string;
  content: string;
  createdAt: string;
};

export default function NewBoardList() {
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
        <StyledLink to={`${MENU.NEW_BOARD}/${key}`}>
          <Space
            direction={'vertical'}
            style={{ width: '100%' }}
            size={'middle'}
          >
            <Space
              style={{ justifyContent: 'space-between', width: '100%' }}
              size={'middle'}
            >
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
        </StyledLink>
      ),
    },
  ];

  return (
    <StyledWrapper>
      <StyledTopBox>
        <Input.Search allowClear style={{ maxWidth: '300px' }} />
        <Link to={`${MENU.NEW_BOARD}/write`}>
          <Button type={'primary'} icon={<GoPencil />}>
            글쓰기
          </Button>
        </Link>
      </StyledTopBox>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ position: ['bottomCenter'] }}
        showHeader={false}
      />
    </StyledWrapper>
  );
}

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  gap: 8px;
`;

const StyledTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
