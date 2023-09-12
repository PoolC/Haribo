import { useSearchParams } from '~/hooks/useSearchParams';
import { match } from 'ts-pattern';
import NormalEditSection from '~/components/new-board/normal/NormalEditSection';
import PromotionEditSection from '~/components/new-board/promotion/PromotionEditSection';
import { BoardType } from '~/lib/utils/boardUtil';

export default function NewBoardEditPage() {
  const searchParams = useSearchParams();
  const boardType = (searchParams.get('boardType') ?? 'NOTICE') as BoardType;

  return match(boardType)
    .with('NOTICE', () => <NormalEditSection boardType={'NOTICE'} />)
    .with('FREE', () => <NormalEditSection boardType={'FREE'} />)
    .with('JOB', () => <PromotionEditSection />)
    .with('PROJECT', () => <NormalEditSection boardType={'PROJECT'} />)
    .with('CS', () => <NormalEditSection boardType={'CS'} />)
    .otherwise(() => {
      throw new Error(`invalid boardType: ${boardType}`);
    });
}
