import React from 'react';
import { Tabs } from 'antd';
import { Block, WhiteBlock } from '../../styles/common/Block.styles';
import NewBoardList from '../../components/new-board/NewBoardList';
import { createStyles } from 'antd-style';
import { useSearchParams } from '~/hooks/useSearchParams';
import { useHistory } from 'react-router-dom';
import { MENU } from '~/constants/menus';

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
  const searchParams = useSearchParams();
  const boardId = searchParams.get('boardId') ?? '1';
  const page = Number(searchParams.get('page') ?? 1);

  const history = useHistory();

  // FIXME antd에서 string타입으로 밖에 키를 안받음..
  const items = [
    {
      key: '1',
      label: '자유게시판',
      children: <NewBoardList boardId={1} page={page} />,
    },
    {
      key: '2',
      label: '공지사항',
      children: <NewBoardList boardId={2} page={page} />,
    },
    {
      key: '3',
      label: '홍보게시판',
      children: <NewBoardList boardId={3} page={page} />,
    },
    {
      key: '4',
      label: '질문게시판',
      children: <NewBoardList boardId={4} page={page} />,
    },
  ];

  const onTabChange = (key: string) =>
    history.push(`/${MENU.NEW_BOARDS}?boardId=${key}&page=1`);

  return (
    <Block>
      <WhiteBlock className={styles.whiteBlock}>
        <div className={styles.wrapper}>
          <Tabs
            items={items}
            defaultActiveKey={boardId}
            onChange={onTabChange}
          />
        </div>
      </WhiteBlock>
    </Block>
  );
}
