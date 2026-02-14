import { HeaderContainer, Logo, Nav, NavLink, LoginButton } from '@components/common/HeaderStyles';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const Signup = () => {
    navigate('/signup');
  };
  const Login = () => {
    navigate('/login');
  };

  return (
    <>
      <HeaderContainer>
        <Logo>면접톡 플러스</Logo>
        <Nav>
          <NavLink $isActive={false}>면접 노트</NavLink>
          <NavLink $isActive={false}>나의 노트</NavLink>
          <NavLink $isActive={false}>면접 연습</NavLink>
          <NavLink $isActive={false}>랭킹</NavLink>
        </Nav>
        <LoginButton onClick={Login}>로그인</LoginButton>
        <LoginButton onClick={Signup}>회원가입</LoginButton>
      </HeaderContainer>
    </>
  );
};

export default Header;
