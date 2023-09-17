import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { loadUser } from './modules/auth';
import { ConfigProvider } from 'antd';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '~/lib/utils/queryClient';
import { MessageProvider } from '~/hooks/useMessage';
import BusinessScrollTopOnRouteChange from '~/components/@business/BusinessScrollTopOnRouteChange';

const sagaMiddleware = createSagaMiddleware();
export const store =
  process.env.NODE_ENV === 'production'
    ? createStore(rootReducer, applyMiddleware(sagaMiddleware))
    : createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware)),
      );

export function setUser() {
  try {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) return; // 로그인 상태가 아니라면 아무것도 안함
    store.dispatch(loadUser());
  } catch (e) {
    console.log('localStorage is not working');
  }
}

sagaMiddleware.run(rootSaga);
setUser();

const fontFamily = [
  'SUIT',
  '-apple-system',
  'BlinkMacSystemFont',
  'system-ui',
  'Roboto',
  'Helvetica Neue',
  'Segoe UI',
  'Apple SD Gothic Neo',
  'Noto Sans KR',
  'Malgun Gothic',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
  'sans-serif',
].join(',');

const theme = {
  token: {
    colorPrimary: '#47be9b',
    fontFamily,
  },
};

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <MessageProvider>
          <BrowserRouter>
            <BusinessScrollTopOnRouteChange />
            <App />
          </BrowserRouter>
        </MessageProvider>
      </QueryClientProvider>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
