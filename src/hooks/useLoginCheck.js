import { useEffect } from 'react';
import * as authAPI from '../lib/api/auth';
import { useSelector } from 'react-redux';
import { MENU } from '../constants/menus';

export default (history) => {
  const member = useSelector((state) => state.auth);
  useEffect(() => {
    authAPI
      .loadUser()
      .then((res) => {
        if (res.status === 200 && res.data.isActivated === false) {
          history.push(`/${MENU.FORBIDDEN}`);
          return;
        }
      })
      .catch((e) => {
        console.error(e.message);
        history.push(`/${MENU.FORBIDDEN}`);
      });
  }, [member, history]);
};
