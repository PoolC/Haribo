import { MENU } from '../../constants/menus';

export const pageAuthCheck = (history, member, permission) => {
  if (
    permission === 'ADMIN' &&
    !(member.status.isLogin && member.user.isAdmin)
  ) {
    history.push(`/${MENU.FORBIDDEN}`);
    return;
  }
  if (permission === 'MEMBER' && !member.status.isLogin) {
    history.push(`/${MENU.FORBIDDEN}`);
  }
};
