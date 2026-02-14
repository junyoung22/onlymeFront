import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// LoginLandingStyles.jsx
const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray[1]};
  font-family: ${({ theme }) => theme.font.family.primary};
  position: relative;
`;

const Header = styled.header`
  padding: ${({ theme }) => theme.space[5]} ${({ theme }) => theme.space[6]};
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${({ theme }) => theme.colors.gray[1]};
  border: 1px solid ${({ theme }) => theme.colors.gray[5]};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all 0.2s ease;
  box-shadow: ${({ theme }) => theme.shadow.sm};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[2]};
    border-color: ${({ theme }) => theme.colors.gray[6]};
    box-shadow: ${({ theme }) => theme.shadow.md};
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    color: ${({ theme }) => theme.colors.gray[12]};
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[6]};
  max-width: 700px;
  margin: 0 auto;
  min-height: 100vh;
`;

const LogoSection = styled.div`
  margin-bottom: ${({ theme }) => theme.space[8]};
  text-align: center;
`;

const Logo = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary[9]} 0%,
    ${({ theme }) => theme.colors.primary[10]} 100%
  );
  border-radius: ${({ theme }) => theme.radius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.space[4]};
  box-shadow: ${({ theme }) => theme.shadow.md};
  font-size: ${({ theme }) => theme.font.size[8]};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.gray[1]};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size[7]};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.space[2]};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.font.size[3]};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.colors.gray[10]};
  margin-bottom: ${({ theme }) => theme.space[8]};
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};
  width: 100%;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.space[5]};
  font-size: ${({ theme }) => theme.font.size[4]};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  border-radius: ${({ theme }) => theme.radius.md};
  border: ${({ theme, $variant }) =>
    $variant === 'primary'
      ? `2px solid ${theme.colors.primary[9]}`
      : `2px solid ${theme.colors.gray[6]}`};
  background-color: ${({ theme, $variant }) =>
    $variant === 'primary' ? theme.colors.primary[9] : theme.colors.gray[1]};
  color: ${({ theme, $variant }) =>
    $variant === 'primary' ? theme.colors.gray[1] : theme.colors.text};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2]};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow.md};
    background-color: ${({ theme, $variant }) =>
      $variant === 'primary' ? theme.colors.primary[10] : theme.colors.gray[2]};
    border-color: ${({ theme, $variant }) =>
      $variant === 'primary' ? theme.colors.primary[10] : theme.colors.gray[7]};
  }

  &:active {
    transform: translateY(0);
  }
`;

const KakaoIcon = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: #fee500;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};
  width: 100%;
  margin: ${({ theme }) => theme.space[4]} 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.gray[5]};
  }
`;

const DividerText = styled.span`
  font-size: ${({ theme }) => theme.font.size[2]};
  color: ${({ theme }) => theme.colors.gray[9]};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;

const Footer = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.space[8]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};
`;

const FooterText = styled.p`
  font-size: ${({ theme }) => theme.font.size[2]};
  color: ${({ theme }) => theme.colors.gray[10]};
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.primary[9]};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[4]};
  font-size: ${({ theme }) => theme.font.size[2]};
`;

const LinkSeparator = styled.span`
  color: ${({ theme }) => theme.colors.gray[7]};
`;

const TextLink = styled.a`
  color: ${({ theme }) => theme.colors.gray[10]};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[9]};
    text-decoration: underline;
  }
`;

// LoginLanding.jsx
const LoginLanding = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  };

  const GeneralLogin = () => {
    navigate('/general/login');
  };

  const KakaoLogin = () => {
    console.log('카카오 로그인');
  };

  const Signup = () => {
    navigate('/signup');
  };

  const handleFindId = () => {
    console.log('아이디 찾기');
  };

  const handleFindPassword = () => {
    console.log('비밀번호 찾기');
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={handleBack} aria-label='뒤로가기'>
          ← 돌아가기
        </BackButton>
      </Header>

      <Main>
        <LogoSection>
          <Logo>L</Logo>
          <Title>로그인</Title>
          <Subtitle>서비스를 이용하기 위해 로그인해주세요</Subtitle>
        </LogoSection>

        <ButtonGroup>
          <LoginButton $variant='primary' onClick={GeneralLogin}>
            이메일로 로그인
          </LoginButton>

          <Divider>
            <DividerText>또는</DividerText>
          </Divider>

          <LoginButton $variant='secondary' onClick={KakaoLogin}>
            <KakaoIcon>K</KakaoIcon>
            카카오로 시작하기
          </LoginButton>
        </ButtonGroup>

        <Footer>
          <FooterText>
            아직 계정이 없으신가요? <FooterLink onClick={Signup}>회원가입</FooterLink>
          </FooterText>

          <LinkGroup>
            <TextLink onClick={handleFindId}>아이디 찾기</TextLink>
            <LinkSeparator>|</LinkSeparator>
            <TextLink onClick={handleFindPassword}>비밀번호 찾기</TextLink>
          </LinkGroup>
        </Footer>
      </Main>
    </Container>
  );
};

export default LoginLanding;
