import client from './client';

export const searchMember = ({ name }) =>
  client.get(`/member/name?name=${name}`);

export const getMembers = () => client.get('/member');

export const getMember = (loginID) => client.get(`/member/${loginID}`);

export const getMemberActivityHours = (semester) =>
  client.get(`/member/hour?when=${semester}`);

export const acceptMember = (loginID) =>
  client.put(`/member/activate/${loginID}`);

export const withdrawMember = (loginID) => client.delete(`/member/${loginID}`);

export const toggleAdmin = ({ loginID, isAdmin }) =>
  client.put(`/member/admin/${loginID}`, { toAdmin: !isAdmin });

export const updateMemberStatus = ({ loginID: loginId, status }) =>
  client.put(`/member/status`, { loginId, status });

export const updateMemberIsExcepted = (loginId) =>
  client.put(`/member/excepted/${loginId}`);
