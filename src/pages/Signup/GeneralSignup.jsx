import { generalSignup } from '@api/userAPIS';
import * as S from '@components/common/GeneralSignupStyles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(''); // 서버 에러 메시지 상태

  const handleBack = () => {
    navigate('/');
  };

  const [formData, setFormData] = useState({
    userLoginId: '',
    userPassword: '',
    userNickname: '',
    userTel: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  // 유효성 검사 상태
  const isUserIdValid = formData.userLoginId.length >= 6;
  const isPasswordValid = formData.userPassword.length >= 8;
  const isNicknameValid = formData.userNickname.length > 0;
  const phoneNumbers = formData.userTel.replace(/[^0-9]/g, '');
  const isPhoneValid = formData.userTel.length === 0 || phoneNumbers.length === 11;

  // 폼 전체 유효성 (필수 항목만)
  const isFormValid = isUserIdValid && isPasswordValid && isNicknameValid;

  // 입력 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'userTel') {
      // 숫자만 추출
      const numbers = value.replace(/[^0-9]/g, '');

      // 11자리로 제한
      if (numbers.length > 11) return;

      // 자동 하이픈 추가
      let formatted = numbers;
      if (numbers.length > 3 && numbers.length <= 7) {
        formatted = `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
      } else if (numbers.length > 7) {
        formatted = `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
      }

      setFormData({ ...formData, userTel: formatted });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // 회원가입 처리
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid || isLoading) return;

    console.log('회원가입 데이터:', formData);
    // API 호출 로직 추가
    setIsLoading(true);

    try {
      // DTO에 맞춰 데이터 준비 (전화번호는 하이픈 제거)
      const submissionData = {
        userLoginId: formData.userLoginId,
        userPassword: formData.userPassword,
        userNickname: formData.userNickname,
        userTel: formData.userTel.replace(/-/g, ''),
      };

      // API 호출
      const response = await generalSignup(submissionData);

      console.log('회원가입 성공:', response);

      // TODO: 성공 후 JWT 토큰을 받는 로그인 API로 연결되어야 함.
      // 현재는 가입 성공 후 '로그인 페이지'로 이동
      alert('회원가입이 성공적으로 완료되었습니다! 로그인해 주세요.');
      navigate('/general/login');
    } catch (error) {
      console.error('❌ 회원가입 실패:', error);
      setApiError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.BackButton>
          <S.BackIcon />
          <S.BackText onClick={handleBack}>홈으로 돌아가기</S.BackText>
        </S.BackButton>
      </S.Header>

      <S.FormWrapper>
        <S.Logo>Re:catch</S.Logo>
        <S.Title>회원가입</S.Title>

        <S.Form onSubmit={handleSubmit}>
          {/* 아이디 */}
          <S.InputGroup>
            <S.Label>
              아이디 <S.Required>*</S.Required>
            </S.Label>
            <S.Input
              type='text'
              name='userLoginId'
              value={formData.userLoginId}
              onChange={handleChange}
              placeholder='6자 이상 입력해주세요'
              $isValid={formData.userLoginId.length === 0 || isUserIdValid}
            />
            {formData.userLoginId.length > 0 && !isUserIdValid && (
              <S.ErrorText>아이디는 6자 이상이어야 합니다</S.ErrorText>
            )}
          </S.InputGroup>

          {/* 비밀번호 */}
          <S.InputGroup>
            <S.Label>
              비밀번호 <S.Required>*</S.Required>
            </S.Label>
            <S.PasswordWrapper>
              <S.Input
                type={showPassword ? 'text' : 'password'}
                name='userPassword'
                value={formData.userPassword}
                onChange={handleChange}
                placeholder='8자 이상 입력해주세요'
                $isValid={formData.userPassword.length === 0 || isPasswordValid}
              />
              <S.ToggleButton type='button' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? '🙈' : '👁️'}
              </S.ToggleButton>
            </S.PasswordWrapper>
            {formData.userPassword.length > 0 && !isPasswordValid && (
              <S.ErrorText>비밀번호는 8자 이상이어야 합니다</S.ErrorText>
            )}
          </S.InputGroup>

          {/* 닉네임 */}
          <S.InputGroup>
            <S.Label>
              닉네임 <S.Required>*</S.Required>
            </S.Label>
            <S.Input
              type='text'
              name='userNickname'
              value={formData.userNickname}
              onChange={handleChange}
              placeholder='닉네임을 입력해주세요'
              $isValid={formData.userNickname.length === 0 || isNicknameValid}
            />
          </S.InputGroup>

          {/* 전화번호 */}
          <S.InputGroup>
            <S.Label>전화번호 (선택)</S.Label>
            <S.Input
              type='text'
              name='userTel'
              value={formData.userTel}
              onChange={handleChange}
              placeholder='010-1234-5678'
              $isValid={isPhoneValid}
            />
            {!isPhoneValid && formData.userTel.length > 0 && (
              <S.ErrorText>올바른 전화번호 형식이 아닙니다 (11자리)</S.ErrorText>
            )}
          </S.InputGroup>

          {/* 서버 에러 메시지 출력 */}
          {apiError && (
            <S.ErrorText className='text-center mt-4 text-red-500'>{apiError}</S.ErrorText>
          )}

          {/* 회원가입 버튼 */}
          <S.SubmitButton
            type='submit'
            $isActive={isFormValid && isPhoneValid}
            disabled={!isFormValid || !isPhoneValid || isLoading}
          >
            {isLoading ? '처리 중...' : '회원가입'}
          </S.SubmitButton>
        </S.Form>
      </S.FormWrapper>
    </S.Container>
  );
};

export default SignUp;
