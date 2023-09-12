import { useSearchParams } from '~/hooks/useSearchParams';
import { match } from 'ts-pattern';
import { BoardType, BoardWriteMode } from '~/lib/utils/boardUtil';
import BoardNormalWriteSection from '~/components/board/BoardNormalWriteSection';
import BoardJobWriteSection from '~/components/board/BoardJobWriteSection';

export default function BoardWritePage() {
  const searchParams = useSearchParams();
  const boardType = (searchParams.get('boardType') ?? 'NOTICE') as BoardType;
  const mode = (searchParams.get('mode') ?? 'NEW') as BoardWriteMode;

  return match(boardType)
    .with('NOTICE', () => (
      <BoardNormalWriteSection mode={mode} boardType={'NOTICE'} />
    ))
    .with('FREE', () => (
      <BoardNormalWriteSection mode={mode} boardType={'FREE'} />
    ))
    .with('JOB', () => <BoardJobWriteSection />)
    .with('PROJECT', () => (
      <BoardNormalWriteSection mode={mode} boardType={'PROJECT'} />
    ))
    .with('CS', () => <BoardNormalWriteSection mode={mode} boardType={'CS'} />)
    .otherwise(() => {
      throw new Error(`invalid boardType: ${boardType}`);
    });
}
