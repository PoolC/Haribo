import { useSearchParams } from '~/hooks/useSearchParams';
import { BoardType } from '~/typings';
import { match } from 'ts-pattern';
import NormalWriteSection from '~/components/new-board/normal/NormalWriteSection';
import PromotionWriteSection from '~/components/new-board/promotion/PromotionWriteSection';

export default function NewBoardWritePage() {
  const searchParams = useSearchParams();
  const boardId = Number(searchParams.get('boardId') ?? 1) as BoardType;

  return match(boardId)
    .with(1, () => <NormalWriteSection boardId={boardId} />)
    .with(2, () => <PromotionWriteSection boardId={boardId} />)
    .with(3, () => <NormalWriteSection boardId={boardId} />)
    .with(4, () => <NormalWriteSection boardId={boardId} />)
    .otherwise(() => {
      throw new Error(`invalid boardId: ${boardId}`);
    });
}
