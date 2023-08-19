export const queryKey = {
  member: {
    hour: ['member.hour'] as const,
    me: ['member.me'] as const,
  },
  badge: {
    badge: ['badge.badge'] as const,
  },
  post: {
    all: (boardId: number, page: number) =>
      ['post.all', boardId, page] as const,
  },
};
