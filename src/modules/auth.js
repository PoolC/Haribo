import { createAction, handleActions } from 'redux-actions';
import { callExpression } from '../../../../../Library/Caches/typescript/4.1/node_modules/@babel/types/lib/index';
import * as authAPI from '../lib/api/auth';
import { call, put } from 'redux-saga/effects';

const SAMPLE_ACTION = 'auth/SAMPLE_ACTION';

const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

export const sampleAction = createAction(SAMPLE_ACTION);

export const register = createAction(REGISTER, ({ username, password }) => ({
  username,
  password,
}));

const registerSaga = () => {
  const SUCCESS = `REGISTER_SUCCESS`;
  const FAILURE = `REGISTER_FAILURE`;

  return function* (action) {
    //yield put(startLoading(REGISTER)); // 로딩 시작
    try {
      const response = yield call(authAPI.register, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data,
        meta: response,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    //yield put(finishLoading(REGISTER)); // 로딩 끝
  };
};

const initialState = {
  login: {
    status: 'INIT',
  },
  status: {
    isLogin: false,
    isAdmin: false,
    init: false,
  },
  user: {
    id: '',
    password: '',
  },
};

const auth = handleActions(
  {
    [SAMPLE_ACTION]: (state, action) => state,
  },
  initialState,
);

export default auth;
