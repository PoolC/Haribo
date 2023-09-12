import { useSearchParams } from '~/hooks/useSearchParams';
import { match } from 'ts-pattern';
import NormalWriteSection from '~/components/new-board/normal/NormalWriteSection';
import PromotionWriteSection from '~/components/new-board/promotion/PromotionWriteSection';
import { BoardType } from '~/lib/utils/boardUtil';

export default function NewBoardWritePage() {
  const searchParams = useSearchParams();
  const boardType = (searchParams.get('boardType') ?? 'NOTICE') as BoardType;

  return match(boardType)
    .with('NOTICE', () => <NormalWriteSection boardType={'NOTICE'} />)
    .with('FREE', () => <NormalWriteSection boardType={'FREE'} />)
    .with('JOB', () => <PromotionWriteSection />)
    .with('PROJECT', () => <NormalWriteSection boardType={'PROJECT'} />)
    .with('CS', () => <NormalWriteSection boardType={'CS'} />)
    .otherwise(() => {
      throw new Error(`invalid boardType: ${boardType}`);
    });
}
