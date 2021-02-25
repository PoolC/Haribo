import { createAction, handleActions } from 'redux-actions';

const SAMPLE_ACTION = 'auth/SAMPLE_ACTION';

export const sampleAction = createAction(SAMPLE_ACTION);

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
