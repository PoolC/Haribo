import client from './client';

export const searchMember = ({ name }) =>
  client.get(`/project/member?name=${name}`);
