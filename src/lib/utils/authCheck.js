import { MENU } from '../../constants/menus';

export const pageAuthCheckByPermission = (history, member, permission) => {
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

export const pageAuthCheckByLoginID = (history, member, loginID) => {
  if (!member.status.isLogin || member.user.memberId !== loginID) {
    history.push(`/${MENU.FORBIDDEN}`);
  }
};
