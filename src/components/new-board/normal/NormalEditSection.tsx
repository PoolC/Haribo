import { BoardType } from '~/lib/utils/boardUtil';

export default function NormalEditSection({
  boardType,
}: {
  boardType: Exclude<BoardType, 'JOB'>;
}) {
  return <div></div>;
}
