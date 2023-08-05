import React, { useState } from 'react';
import { Tabs } from 'antd';
import { Block, WhiteBlock } from '../../styles/common/Block.styles';
import NewBoardList from '../../components/new-board/NewBoardList';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css }) => ({
  whiteBlock: css`
    padding: 30px 0;
  `,
  wrapper: css`
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    box-sizing: border-box;
  `,
}));

export default function NewBoardListPage() {
  const { styles } = useStyles();
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
    {
      key: '3',
      label: '홍보게시판',
      children: <NewBoardList />,
    },
    {
      key: '4',
      label: '질문게시판',
      children: <NewBoardList />,
    },
  ];

  const onTabChange = (key: string) => {
    setCurrentKey(key);
  };

  return (
    <Block>
      <WhiteBlock className={styles.whiteBlock}>
        <div className={styles.wrapper}>
          <Tabs
            items={items}
            defaultActiveKey={currentKey}
            onChange={onTabChange}
          />
        </div>
      </WhiteBlock>
    </Block>
  );
}
