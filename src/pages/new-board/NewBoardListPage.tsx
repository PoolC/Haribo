import React, { useState } from 'react';
import { Tabs } from 'antd';
import { Block, WhiteBlock } from '../../styles/common/Block.styles';
import NewBoardList from '../../components/new-board/NewBoardList';
import styled from 'styled-components';

export default function NewBoardListPage() {
  const [currentKey, setCurrentKey] = useState('1');
  const items = [
    {
      key: '1',
      label: '자유게시판',
      children: <NewBoardList />,
    },
    {
      key: '2',
      label: '공지사항',
      children: <NewBoardList />,
    },
  ];

  const onTabChange = (key: string) => {
    setCurrentKey(key);
  };

  return (
    <Block>
      <WhiteBlock>
        <Box>
          <Tabs
            items={items}
            defaultActiveKey={currentKey}
            onChange={onTabChange}
          />
        </Box>
      </WhiteBlock>
    </Block>
  );
}

const Box = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  box-sizing: border-box;
`;
