import { createAction, handleActions } from 'redux-actions';
import * as authAPI from '../lib/api/auth';
import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

const LOAD_USER = 'auth/LOAD_USER';
const LOAD_USER_SUCCESS = 'auth/LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'auth/LOAD_USER_FAILURE';

const LOGOUT = 'auth/LOGOUT';
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'auth/LOGOUT_FAILURE';

export const login = createAction(LOGIN, ({ id, password }) => ({
  id,
  password,
}));

export const loadUser = createAction(LOAD_USER);

export const logout = createAction(LOGOUT);

function* loadUserSaga(action) {
  try {
    const result = yield call(authAPI.loadUser);
    yield put({
      type: LOAD_USER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_USER_FAILURE,
      error: err.response.data,
    });
  }
}

function* loginSaga(action) {
  try {
    const result = yield call(authAPI.login, action.payload);
    yield localStorage.setItem('accessToken', result.data.accessToken);
    yield put({
      type: LOGIN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error('*****');
    console.error(err);
    yield put({
      type: LOGIN_FAILURE,
      error: err,
    });
  }
}

function logoutRequest() {
  localStorage.removeItem('accessToken');
}

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LOGIN_SUCCESS, loadUserSaga);
  yield takeLatest(LOAD_USER, loadUserSaga);
  yield takeLatest(LOGOUT, logoutRequest);
}

const initialState = {
  authError: null,
  login: {
    status: 'INIT',
  },
  status: {
    isLogin: false,
    init: false,
  },
  user: {
    memberId: '',
    name: '',
    password: '',
    isAdmin: false,
  },
};

const auth = handleActions(
  {
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      status: {
        isLogin: true,
        init: false,
      },
      authError: null,
    }),
    [LOGIN_FAILURE]: (state, { error }) => ({
      ...state,
      authError: error,
    }),
    [LOAD_USER_SUCCESS]: (state, { data }) => {
      return {
        ...state,
        status: {
          isLogin: true,
          init: false,
        },
        user: {
          memberId: data.loginID,
          isAdmin: data.isAdmin,
          name: data.name,
        },
      };
    },
    [LOAD_USER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [LOGOUT]: (state, { payload: error }) => ({
      ...state,
      status: {
        isLogin: false,
        init: false,
      },
      user: {
        memberId: '',
        password: '',
        name: '',
        isAdmin: false,
      },
    }),
  },
  initialState,
);

export default auth;
