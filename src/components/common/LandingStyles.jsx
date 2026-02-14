import styled from 'styled-components';

// ====== 헤더 스타일 ======
export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.gray[1]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[4]};
  z-index: 1000;
`;

// ====== 메인 섹션 스타일 ======
export const MainSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[10]};
  padding-top: calc(80px + ${({ theme }) => theme.space[10]});
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary[3]} 0%,
    ${({ theme }) => theme.colors.primary[5]} 100%
  );
`;

export const ContentBox = styled.div`
  max-width: 1200px;
  width: 100%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary[8]} 0%,
    ${({ theme }) => theme.colors.primary[10]} 100%
  );
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: ${({ theme }) => theme.space[12]};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  display: flex;
  gap: ${({ theme }) => theme.space[10]};
  align-items: center;
`;

export const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};
`;

export const MainTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size[9]};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.gray[1]};
  margin: 0;
  line-height: ${({ theme }) => theme.font.lineHeight[9]};
`;

export const SubText = styled.p`
  font-size: ${({ theme }) => theme.font.size[4]};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.colors.gray[1]};
  line-height: ${({ theme }) => theme.font.lineHeight[5]};
  margin: 0;
`;

export const CTAButton = styled.button`
  width: fit-content;
  padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[8]};
  background-color: ${({ theme }) => theme.colors.gray[1]};
  color: ${({ theme }) => theme.colors.primary[9]};
  border: none;
  border-radius: ${({ theme }) => theme.radius.lg};
  font-size: ${({ theme }) => theme.font.size[4]};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${({ theme }) => theme.shadow.md};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow.lg};
  }
`;

export const RightContent = styled.div`
  flex: 1;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: ${({ theme }) => theme.space[4]};
  min-height: 400px;
`;

export const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[1]};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.space[6]};
  box-shadow: ${({ theme }) => theme.shadow.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};
  transition: transform 0.2s ease;

  ${({ $position }) => {
    if ($position === 'top') {
      return `
        grid-column: 2;
        grid-row: 1;
      `;
    }
    if ($position === 'bottom-left') {
      return `
        grid-column: 1;
        grid-row: 2;
      `;
    }
    if ($position === 'bottom-right') {
      return `
        grid-column: 2;
        grid-row: 2;
      `;
    }
  }}

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadow.lg};
  }
`;

export const CardIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ $color }) => $color || '#8B7BE8'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.font.size[5]};
`;

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size[4]};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.font.size[2]};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.colors.gray[10]};
  line-height: ${({ theme }) => theme.font.lineHeight[2]};
  margin: 0;
`;
