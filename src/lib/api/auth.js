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
}) =>
  client.post(
    '/member',
    {
      loginID: id,
      password,
      passwordCheck,
      name,
      email,
      department,
      studentID: studentId,
      phoneNumber,
      introduction,
    },

    // client.post('/member', {
    //   loginID: 'test4',
    //   password: '1111111',
    //   passwordCheck: '1111111',
    //   name: '김민지',
    //   email: 'test4@gmail.com',
    //   department: '국어국문학과',
    //   studentID: '2015110024',
    //   phoneNumber: '010-0000-0004',
    //   introduction: 'hihi',
    // }
  );

// 본인 정보 조회
export const loadUser = () => client.get('/member/me');

export const updateUser = ({
  password,
  passwordCheck,
  email,
  phoneNumber,
  introduction,
}) =>
  client.put('/member/me', {
    password,
    passwordCheck,
    email,
    phoneNumber,
    introduction,
  });
