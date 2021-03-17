import client from './client';

// 로그인
export const login = ({ id, password }) =>
  client.post('/login', { loginID: id, password });

// 회원가입
export const register = ({
  id,
  password,
  passwordCheck,
  name,
  email,
  department,
  studentId,
  phoneNumber,
  introduction,
  profileImageURL,
}) =>
  client.post('/member', {
    loginID: id,
    password,
    passwordCheck,
    name,
    email,
    department,
    studentID: studentId,
    phoneNumber,
    introduction,
    profileImageURL,
  });

// 본인 정보 조회
export const loadUser = () => client.get('/member/me');

export const updateUser = ({
  name,
  password,
  passwordCheck,
  email,
  phoneNumber,
  introduction,
  profileImageURL,
}) =>
  client.put('/member/me', {
    name,
    password,
    passwordCheck,
    email,
    phoneNumber,
    introduction,
    profileImageURL,
  });
