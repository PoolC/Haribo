import client from './client';

export const searchMember = ({ name }) =>
  client.get(`/member/name?name=${name}`);

export const getMembers = () => client.get('/member');

export const getMember = (loginID) => client.get(`/member/${loginID}`);

export const acceptMember = (loginID) =>
  client.put(`/member/activate/${loginID}`);

export const withdrawMember = (loginID) => client.delete(`/member/${loginID}`);

export const toggleAdmin = ({ loginID, isAdmin }) =>
  client.put(`/member/admin/${loginID}`, { toAdmin: !isAdmin });
