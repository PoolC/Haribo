import { OpenAPI } from '~/lib/api-v2/__generated__';

export function setApiAccessToken(token: string) {
  OpenAPI.TOKEN = token;
}

function init() {
  // token
  const cachedToken = localStorage.getItem('accessToken');
  if (cachedToken) {
    setApiAccessToken(cachedToken);
  }

  // base url
  const API_BASE_URL = import.meta.env.DEV
    ? '/api/mincho'
    : import.meta.env.VITE_API_BASE_URL;
  OpenAPI.BASE = API_BASE_URL;
}

init();
