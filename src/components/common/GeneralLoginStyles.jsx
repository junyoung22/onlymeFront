import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gray[1]} 0%,
    ${({ theme }) => theme.colors.primary[2]} 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.space[4]};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.space[2]};
  }
`;

export const Header = styled.header`
  width: 100%;
  max-width: 1200px;
  padding: ${({ theme }) => theme.space[6]} ${({ theme }) => theme.space[4]};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[2]};
  }
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
  font-weight: ${({ theme }) => theme.font.weight.medium};
  transition: all 0.2s ease;
  padding: ${({ theme }) => theme.space[2]};
  border-radius: ${({ theme }) => theme.radius.sm};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.gray[3]};
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.size[1]};
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
  width: 100%;
  max-width: 480px;
  padding: ${({ theme }) => theme.space[10]} ${({ theme }) => theme.space[8]};
  background-color: ${({ theme }) => theme.colors.gray[1]};
  border-radius: ${({ theme }) => theme.radius.xl};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: ${({ theme }) => theme.space[6]} ${({ theme }) => theme.space[4]};
    border-radius: ${({ theme }) => theme.radius.lg};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.space[5]} ${({ theme }) => theme.space[3]};
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.font.size[7]};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.size[6]};
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size[6]};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.space[2]};
  text-align: center;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.size[5]};
  }
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.font.size[2]};
  color: ${({ theme }) => theme.colors.gray[10]};
  margin-bottom: ${({ theme }) => theme.space[8]};
  text-align: center;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.size[1]};
    margin-bottom: ${({ theme }) => theme.space[6]};
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[5]};
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

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.size[1]};
  }
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
  transition: all 0.2s ease;
  outline: none;
  font-family: ${({ theme }) => theme.font.family.primary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[9]};
  }

  &:focus {
    border-color: ${({ theme, $isValid }) =>
      $isValid ? theme.colors.primary[9] : theme.colors.error};
    background-color: ${({ theme }) => theme.colors.gray[1]};
    box-shadow: 0 0 0 3px
      ${({ theme, $isValid }) => ($isValid ? theme.colors.primary[3] : theme.colors.error)}20;
  }

  &:hover:not(:focus) {
    border-color: ${({ theme, $isValid }) =>
      $isValid ? theme.colors.gray[7] : theme.colors.error};
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.space[3]};
    font-size: ${({ theme }) => theme.font.size[2]};
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
  padding: ${({ theme }) => theme.space[2]};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  transition: opacity 0.2s ease;
  border-radius: ${({ theme }) => theme.radius.sm};

  &:hover {
    opacity: 1;
    background-color: ${({ theme }) => theme.colors.gray[3]};
  }
`;

export const ErrorText = styled.p`
  font-size: ${({ theme }) => theme.font.size[1]};
  color: ${({ theme }) => theme.colors.error};
  margin-top: ${({ theme }) => theme.space[1]};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;

export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.space[1]};

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space[2]};
  }
`;

export const RememberMeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.colors.primary[9]};
`;

export const CheckboxLabel = styled.label`
  font-size: ${({ theme }) => theme.font.size[2]};
  color: ${({ theme }) => theme.colors.gray[11]};
  cursor: pointer;
  user-select: none;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.size[1]};
  }
`;

export const ForgotPassword = styled.a`
  font-size: ${({ theme }) => theme.font.size[2]};
  color: ${({ theme }) => theme.colors.primary[9]};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[10]};
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.size[1]};
  }
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
  font-family: ${({ theme }) => theme.font.family.primary};

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

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.space[4]};
    font-size: ${({ theme }) => theme.font.size[2]};
  }
`;

export const SignUpSection = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[2]};
  align-items: center;
  margin-top: ${({ theme }) => theme.space[6]};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space[1]};
  }
`;

export const SignUpText = styled.span`
  font-size: ${({ theme }) => theme.font.size[2]};
  color: ${({ theme }) => theme.colors.gray[10]};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.size[1]};
  }
`;

export const SignUpLink = styled.a`
  font-size: ${({ theme }) => theme.font.size[2]};
  color: ${({ theme }) => theme.colors.primary[9]};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[10]};
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.size[1]};
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: ${({ theme }) => theme.space[8]} 0;
  gap: ${({ theme }) => theme.space[3]};

  @media (max-width: 768px) {
    margin: ${({ theme }) => theme.space[6]} 0;
  }
`;

export const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray[6]};
`;

export const DividerText = styled.span`
  font-size: ${({ theme }) => theme.font.size[2]};
  color: ${({ theme }) => theme.colors.gray[9]};
  font-weight: ${({ theme }) => theme.font.weight.medium};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.size[1]};
  }
`;

export const SocialButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};
  width: 100%;
`;

export const SocialButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.space[4]};
  font-size: ${({ theme }) => theme.font.size[2]};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-family: ${({ theme }) => theme.font.family.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[3]};
  border: 2px solid ${({ theme }) => theme.colors.gray[6]};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.gray[1]};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme, $provider }) =>
      $provider === 'google'
        ? '#4285F4'
        : $provider === 'microsoft'
          ? '#00A4EF'
          : theme.colors.gray[8]};
    background-color: ${({ theme }) => theme.colors.gray[2]};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow.sm};
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.space[3]};
    font-size: ${({ theme }) => theme.font.size[1]};
  }
`;

export const SocialIcon = styled.span`
  font-size: ${({ theme }) => theme.font.size[4]};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  display: flex;
  align-items: center;
  justify-content: center;
`;
