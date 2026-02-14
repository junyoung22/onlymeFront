import { axiosInstance } from '@api/axios';

/**
 * POST: 일반 회원가입
 * @param {object} signupData - { userLoginId, userPassword, userNickname, userTel }
 * @returns {Promise<object>} SignupResponse (userId 포함)
 */
export const generalSignup = async (signupData) => {
  const { data } = await axiosInstance.post('/users/signup', signupData);
  return data;
};

/**
 * TODO: 일반 로그인 구현 예정
 */
// export const generalLogin = async (loginData) => {
//     const { data } = await axiosInstance.post('/users/login', loginData);
//     return data; // JWT 토큰 및 유저 정보 반환
// };
