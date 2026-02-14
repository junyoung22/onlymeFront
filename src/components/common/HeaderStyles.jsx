import styled from 'styled-components';

export const HeaderContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[6]};
`;

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.font.size[5]};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.primary[9]};
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.space[8]};
`;

export const NavLink = styled.a`
  font-size: ${({ theme }) => theme.font.size[3]};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.primary[9] : theme.colors.gray[11])};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[9]};
  }
`;

export const LoginButton = styled.button`
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[5]};
  background-color: ${({ theme }) => theme.colors.primary[9]};
  color: ${({ theme }) => theme.colors.gray[1]};
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.font.size[2]};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[10]};
  }
`;
