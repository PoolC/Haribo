import { Space, Table, Typography } from 'antd';
import React from 'react'
import { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { MENU } from '../../constants/menus';
import styled from 'styled-components';

type DataType = {
  key: string,
  title: string,
  content: string
  createdAt: string
}

export default function NewBoardList() {
  const dataSource: DataType[]= [
    {
      key: '1',
      title: '질문 있습니다',
      content: "html은 프로그래밍 언어인가요?",
      createdAt: '2023년 7월 28일',
    },
    {
      key: '2',
      title: '질문 있습니다',
      content: "html은 프로그래밍 언어인가요?",
      createdAt: '2023년 7월 28일',
    },
    {
      key: '3',
      title: '질문 있습니다',
      content: "html은 프로그래밍 언어인가요?",
      createdAt: '2023년 7월 28일',
    },
  ];

  const columns: ColumnsType<DataType> = [
    {
      render: (_, {title, content, key, createdAt}) => <StyledLink to={`${MENU.NEW_BOARD}/${key}`}>
        <Space direction={"vertical"}>
          <Typography.Title level={5}>{title}</Typography.Title>
          <Typography.Text>{content}</Typography.Text>
        <Typography.Text type={"secondary"}>{createdAt}</Typography.Text>
        </Space>
      </StyledLink>,
    },
  ];

  return <Table dataSource={dataSource} columns={columns} pagination={{position: ["bottomCenter"]}} showHeader={false}/>
}

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
`
