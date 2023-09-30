import getFileUrl from '~/lib/utils/getFileUrl';

export function getProfileImageUrl(num: number) {
  return getFileUrl(`/files/profile-${num}.png`);
}
