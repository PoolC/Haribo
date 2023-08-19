import { OpenAPI } from '~/lib/api-v2/__generated__';

const API_BASE_URL = import.meta.env.DEV
  ? '/api/mincho'
  : import.meta.env.VITE_API_BASE_URL;

OpenAPI.BASE = API_BASE_URL;

export function setApiAccessToken(token: string) {
  OpenAPI.TOKEN = token;
}
