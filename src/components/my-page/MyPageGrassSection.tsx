import { Tooltip } from 'antd';
import { createStyles } from 'antd-style';
import dayjs from 'dayjs';
import { memo } from 'react';

const useStyles = createStyles(({ css }) => ({
  wrapper: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-x: auto;
  `,
  monthWrap: css`
    display: flex;
    justify-content: space-between;
  `,
  cell: css`
    width: 18px;
    height: 18px;
    background-color: #dadfe3;
    border-radius: 4px;
  `,
  cellWrap: css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex-wrap: wrap;
    max-height: 200px;
    flex-shrink: 0;
    width: 100%;
  `,
}));

function MyPageGrassSection() {
  const { styles } = useStyles();

  const months = Array(12)
    .fill(0)
    .map((_, i) => i + 1);

  const currMonth = dayjs().month();

  const displayingMonths = [
    ...months.slice(currMonth),
    ...months.slice(0, currMonth + 1),
  ];

  const totalDays = displayingMonths
    .map((month) => dayjs(month).daysInMonth())
    .reduce((a, b) => a + b);

  return (
    <div className={styles.wrapper}>
      <div className={styles.monthWrap}>
        {displayingMonths.map((month, i) => (
          <span key={i}>{month}월</span>
        ))}
      </div>
      <div className={styles.cellWrap}>
        {Array(totalDays)
          .fill(0)
          .map((month, i) => (
            <Tooltip key={i} placement="top" title={month}>
              <div className={styles.cell}></div>
            </Tooltip>
          ))}
      </div>
    </div>
  );
}

export default memo(MyPageGrassSection);
