import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray[1]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* 세로 레이아웃 안정 개선 */
  width: 100%; /* 가로 전체 사용 */
`;

export const Header = styled.header`
  width: 100%;
  padding: ${({ theme }) => theme.space[6]};
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray[11]};
  font-size: ${({ theme }) => theme.font.size[2]};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const BackIcon = styled.span`
  &::before {
    content: '←';
    font-size: ${({ theme }) => theme.font.size[4]};
  }
`;

export const BackText = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;

export const FormWrapper = styled.div`
  width: 100%; /* ⭐ 기본은 100% 너비로 반응형 지원 */
  max-width: 700px; /* ⭐ 최대 폭 제한 */
  padding: ${({ theme }) => theme.space[6]};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.space[4]};
  }
`;

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.font.size[7]};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.space[2]};

  &::before {
    content: '🔖 ';
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size[5]};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.space[10]};
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.font.size[2]};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const Required = styled.span`
  color: ${({ theme }) => theme.colors.error};
  margin-left: ${({ theme }) => theme.space[1]};
`;

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.space[4]};
  font-size: ${({ theme }) => theme.font.size[3]};
  border: 2px solid
    ${({ theme, $isValid }) => ($isValid ? theme.colors.gray[5] : theme.colors.error)};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.gray[1]};
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.2s;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[9]};
  }

  &:focus {
    border-color: ${({ theme, $isValid }) =>
      $isValid ? theme.colors.primary[9] : theme.colors.error};
    background-color: ${({ theme }) => theme.colors.gray[1]};
  }

  &:hover:not(:focus) {
    border-color: ${({ theme, $isValid }) =>
      $isValid ? theme.colors.gray[7] : theme.colors.error};
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.space[4]};
  background: none;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.size[4]};
  padding: ${({ theme }) => theme.space[1]};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const ErrorText = styled.p`
  font-size: ${({ theme }) => theme.font.size[1]};
  color: ${({ theme }) => theme.colors.error};
  margin-top: ${({ theme }) => theme.space[1]};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.space[5]};
  margin-top: ${({ theme }) => theme.space[4]};
  font-size: ${({ theme }) => theme.font.size[3]};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.gray[1] : theme.colors.gray[9])};
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary[9] : theme.colors.gray[5]};
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: ${({ $isActive }) => ($isActive ? 'pointer' : 'not-allowed')};
  transition: all 0.3s ease;
  box-shadow: ${({ theme, $isActive }) => ($isActive ? theme.shadow.sm : 'none')};

  &:hover {
    background-color: ${({ theme, $isActive }) =>
      $isActive ? theme.colors.primary[10] : theme.colors.gray[5]};
    transform: ${({ $isActive }) => ($isActive ? 'translateY(-2px)' : 'none')};
    box-shadow: ${({ theme, $isActive }) => ($isActive ? theme.shadow.md : 'none')};
  }

  &:active {
    transform: ${({ $isActive }) => ($isActive ? 'translateY(0)' : 'none')};
  }

  &:disabled {
    pointer-events: none;
  }
`;
