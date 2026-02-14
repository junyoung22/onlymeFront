import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

// SignupLandingStyles.jsx
const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray[1]};
  font-family: ${({ theme }) => theme.font.family.primary};
`;

const Header = styled.header`
  padding: ${({ theme }) => theme.space[5]};
  display: flex;
  align-items: center;
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
  max-width: 480px;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.space[12]};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size[7]};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.space[3]};
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.font.size[3]};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.colors.gray[10]};
  margin-bottom: ${({ theme }) => theme.space[10]};
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
  width: 100%;
`;

const SignupButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.space[5]};
  font-size: ${({ theme }) => theme.font.size[4]};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 2px solid
    ${({ theme, $variant }) =>
      $variant === 'primary' ? theme.colors.primary[9] : theme.colors.gray[6]};
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

// SignupLanding.jsx
const SignupLanding = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const GeneralSignup = () => {
    navigate('/general/signup');
  };

  const KakaoSignup = () => {
    console.log('카카오 회원가입');
  };

  const Login = () => {
    navigate('/login');
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={handleBack} aria-label='뒤로가기'>
          ← 돌아가기
        </BackButton>
      </Header>

      <Main>
        <Title>회원가입</Title>
        <Subtitle>서비스를 이용하기 위해 가입해주세요</Subtitle>

        <ButtonGroup>
          <SignupButton $variant='primary' onClick={GeneralSignup}>
            일반 회원가입
          </SignupButton>

          <Divider>
            <DividerText>또는</DividerText>
          </Divider>

          <SignupButton $variant='secondary' onClick={KakaoSignup}>
            <KakaoIcon>K</KakaoIcon>
            카카오로 시작하기
          </SignupButton>
        </ButtonGroup>

        <Footer>
          이미 계정이 있으신가요? <FooterLink onClick={Login}>로그인</FooterLink>
        </Footer>
      </Main>
    </Container>
  );
};

export default SignupLanding;
