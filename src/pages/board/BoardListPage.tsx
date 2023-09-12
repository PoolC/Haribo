import { Tabs } from 'antd';
import { Block, WhiteBlock } from '~/styles/common/Block.styles';
import BoardList from '~/components/board/BoardList';
import { createStyles } from 'antd-style';
import { useSearchParams } from '~/hooks/useSearchParams';
import { useHistory } from 'react-router-dom';
import { MENU } from '~/constants/menus';
import { BoardType, getBoardTitleByBoardType } from '~/lib/utils/boardUtil';

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

export default function BoardListPage() {
  const { styles } = useStyles();
  const searchParams = useSearchParams();
  const boardType = (searchParams.get('boardType') ?? 'NOTICE') as BoardType;
  const page = Number(searchParams.get('page') ?? 1);

  const history = useHistory();

  // FIXME antd에서 string타입으로 밖에 키를 안받음..
  const items: {
    key: BoardType;
    label: string;
    children: JSX.Element;
  }[] = [
    {
      key: 'NOTICE',
      label: getBoardTitleByBoardType('NOTICE'),
      children: <BoardList boardType={'NOTICE'} page={page} />,
    },
    {
      key: 'FREE',
      label: getBoardTitleByBoardType('FREE'),
      children: <BoardList boardType={'FREE'} page={page} />,
    },
    {
      key: 'JOB',
      label: getBoardTitleByBoardType('JOB'),
      children: <BoardList boardType={'JOB'} page={page} />,
    },
    {
      key: 'PROJECT',
      label: getBoardTitleByBoardType('PROJECT'),
      children: <BoardList boardType={'PROJECT'} page={page} />,
    },
    {
      key: 'CS',
      label: getBoardTitleByBoardType('CS'),
      children: <BoardList boardType={'CS'} page={page} />,
    },
  ];

  const onTabChange = (key: string) =>
    history.push(`/${MENU.BOARD}?boardType=${key}&page=1`);

  return (
    <Block>
      <WhiteBlock className={styles.whiteBlock}>
        <div className={styles.wrapper}>
          <Tabs
            items={items}
            defaultActiveKey={boardType}
            onChange={onTabChange}
          />
        </div>
      </WhiteBlock>
    </Block>
  );
}
