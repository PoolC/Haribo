import { Tooltip } from 'antd';
import { createStyles } from 'antd-style';
import dayjs, { Dayjs } from 'dayjs';
import objectSupport from 'dayjs/plugin/objectSupport';
import { memo } from 'react';
import { BaekjoonResponse } from '~/lib/api-v2';

dayjs.extend(objectSupport);

const useStyles = createStyles(({ css }) => ({
  wrapper: css`
    display: flex;
    gap: 16px;
  `,
  month: css``,
  monthWrap: css`
    display: flex;
  `,
  cell: css`
    width: 11px;
    height: 11px;
    background-color: #dadfe3;
    border-radius: 4px;
  `,
  cellWrap: css`
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(7, 1fr);
    gap: 5px;
  `,
}));

function MyPageGrassSection({
  baekjoonData,
}: {
  baekjoonData: BaekjoonResponse[];
}) {
  const { styles } = useStyles();

  const getDisplayingMonths = () => {
    const currYear = dayjs().year();
    const currMonth = dayjs().month();

    const res = [];

    for (let m = currMonth + 1; m < 12 + 1; m++) {
      res.push(dayjs({ year: currYear - 1, month: m }));
    }

    for (let m = 1; m < currMonth + 1; m++) {
      res.push(dayjs({ year: currYear, month: m }));
    }

    return res;
  };

  const displayingMonths = getDisplayingMonths();

  const getDisplayingDays = () => {
    const months = displayingMonths.flatMap((month) =>
      Array(month.daysInMonth())
        .fill(0)
        .map((_, i) =>
          dayjs({
            year: month.year(),
            month: month.month(),
            day: i + 1,
          }),
        ),
    );

    return months;
  };

  const displayingDays = getDisplayingDays();

  const getSolvedProblemsCount = (day: Dayjs) => {
    const targetDayDatas = baekjoonData.filter((data) =>
      dayjs(data.date).isSame(day),
    );
    return targetDayDatas.length;
  };

  const getMonthWidth = (month: Dayjs) => {
    const totalDays = displayingMonths.reduce((a, b) => a + b.daysInMonth(), 0);
    return `${(month.daysInMonth() / totalDays) * 100}%`;
  };

  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.monthWrap}>
        {displayingMonths.map((month, i) => (
          <div
            key={i}
            style={{ width: getMonthWidth(month) }}
            className={styles.month}
          >
            {month.month() + 1}월
          </div>
        ))}
      </div> */}
      <div className={styles.cellWrap}>
        {displayingDays.map((day, i) => (
          <Tooltip
            placement="top"
            title={`${day.format('YYYY년 MM월 DD일')}: ${getSolvedProblemsCount(
              day,
            )}개`}
            key={i}
          >
            <div
              className={styles.cell}
              style={{
                backgroundColor:
                  getSolvedProblemsCount(day) > 0 ? 'green' : '#dadfe3',
              }}
            />
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

export default memo(MyPageGrassSection);
