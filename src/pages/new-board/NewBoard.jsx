import React, { useState } from 'react';
import { Tabs } from 'antd';
import { Block, WhiteBlock } from '../../styles/common/Block.styles';

export default function NewBoardPage() {
  const [currentKey, setCurrentKey] = useState('1')
  const items = [
    {
      key: '1',
      label: '자유게시판',
      children: '자유게시판입니다'
    },
    {
      key: '2',
      label: '공지사항',
      children: '공지사항입니다'
    }
  ]

  const onTabChange = (key) => {
    setCurrentKey(key)
  }

  return (
    <Block>
      <WhiteBlock>
        <Tabs items={items} defaultActiveKey={currentKey} onChange={onTabChange}/>
      </WhiteBlock>
    </Block>
  );
}
