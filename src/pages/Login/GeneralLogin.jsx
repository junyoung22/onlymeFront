import * as S from '@components/common/GeneralLoginStyles';
import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    userLoginId: '',
    userPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // 유효성 검사
  const isUserIdValid = formData.userLoginId.length >= 6;
  const isPasswordValid = formData.userPassword.length >= 8;
  const isFormValid = isUserIdValid && isPasswordValid;

  // 입력 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 로그인 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    console.log('로그인 데이터:', {
      ...formData,
      rememberMe,
    });
    // API 호출 로직 추가
  };

  return (
    <S.Container>
      <S.Header>
        <S.BackButton>
          <S.BackIcon />
          <S.BackText>홈으로 돌아가기</S.BackText>
        </S.BackButton>
      </S.Header>

      <S.FormWrapper>
        <S.LogoContainer>
          <S.Logo>🔖 Re:catch</S.Logo>
        </S.LogoContainer>

        <S.Title>로그인</S.Title>
        <S.Subtitle>Re:catch에 오신 것을 환영합니다</S.Subtitle>

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
              placeholder='아이디를 입력해주세요'
              $isValid={formData.userLoginId.length === 0 || isUserIdValid}
              autoComplete='username'
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
                placeholder='비밀번호를 입력해주세요'
                $isValid={formData.userPassword.length === 0 || isPasswordValid}
                autoComplete='current-password'
              />
              <S.ToggleButton
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
              >
                {showPassword ? '🙈' : '👁️'}
              </S.ToggleButton>
            </S.PasswordWrapper>
            {formData.userPassword.length > 0 && !isPasswordValid && (
              <S.ErrorText>비밀번호는 8자 이상이어야 합니다</S.ErrorText>
            )}
          </S.InputGroup>

          {/* 로그인 옵션 */}
          <S.OptionsWrapper>
            <S.RememberMeWrapper>
              <S.Checkbox
                type='checkbox'
                id='rememberMe'
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <S.CheckboxLabel htmlFor='rememberMe'>로그인 상태 유지</S.CheckboxLabel>
            </S.RememberMeWrapper>

            <S.ForgotPassword href='/forgot-password'>비밀번호 찾기</S.ForgotPassword>
          </S.OptionsWrapper>

          {/* 로그인 버튼 */}
          <S.SubmitButton type='submit' $isActive={isFormValid} disabled={!isFormValid}>
            로그인
          </S.SubmitButton>
        </S.Form>

        {/* 회원가입 링크 */}
        <S.SignUpSection>
          <S.SignUpText>아직 회원이 아니신가요?</S.SignUpText>
          <S.SignUpLink href='/signup'>회원가입</S.SignUpLink>
        </S.SignUpSection>

        {/* 소셜 로그인 */}
        <S.Divider>
          <S.DividerLine />
          <S.DividerText>또는</S.DividerText>
          <S.DividerLine />
        </S.Divider>

        <S.SocialButtonsWrapper>
          <S.SocialButton $provider='google'>
            <S.SocialIcon>G</S.SocialIcon>
            Google로 로그인
          </S.SocialButton>
          <S.SocialButton $provider='microsoft'>
            <S.SocialIcon>⊞</S.SocialIcon>
            Microsoft로 로그인
          </S.SocialButton>
        </S.SocialButtonsWrapper>
      </S.FormWrapper>
    </S.Container>
  );
};

export default Login;
