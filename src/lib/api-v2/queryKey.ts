export const queryKey = {
  member: {
    hour: ['member.hour'] as const,
    me: ['member.me'] as const,
  },
  badge: {
    badge: ['badge.badge'] as const,
    all: ['badge.all'] as const,
  },
  post: {
    all: (boardId: number, page: number) =>
      ['post.all', boardId, page] as const,
  },
  baekjoon: {
    baekjoon: ['baekjoon.baekjoon'] as const,
  },
  poolc: {
    poolc: ['poolc.poolc'] as const,
  },
  project: {
    all: ['project.all'] as const,
  },
};
