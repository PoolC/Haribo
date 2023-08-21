import { useSearchParams } from '~/hooks/useSearchParams';
import { BoardType } from '~/typings';
import { match } from 'ts-pattern';
import NormalEditSection from '~/components/new-board/normal/NormalEditSection';
import NormalWriteSection from '~/components/new-board/normal/NormalWriteSection';
import PromotionEditSection from '~/components/new-board/promotion/PromotionEditSection';

export default function NewBoardEditPage() {
  const searchParams = useSearchParams();
  const boardId = Number(searchParams.get('boardId') ?? 1) as BoardType;

  return match(boardId)
    .with(1, () => <NormalEditSection boardId={boardId} />)
    .with(2, () => <PromotionEditSection boardId={boardId} />)
    .with(3, () => <NormalEditSection boardId={boardId} />)
    .with(4, () => <NormalWriteSection boardId={boardId} />)
    .otherwise(() => {
      throw new Error(`invalid boardId: ${boardId}`);
    });
}
