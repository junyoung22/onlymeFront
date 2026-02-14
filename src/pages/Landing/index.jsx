import {
  MainSection,
  ContentBox,
  LeftContent,
  MainTitle,
  SubText,
  CTAButton,
  RightContent,
  FeatureCard,
  CardIcon,
  CardTitle,
  CardDescription,
} from '@components/common/LandingStyles';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import React from 'react';

export default function Landing() {
  return (
    <>
      <Header></Header>
      {/* 메인 랜딩 섹션 */}
      <MainSection>
        <ContentBox>
          <LeftContent>
            <MainTitle>면접톡!</MainTitle>
            <SubText>
              혼자 하는 면접 준비는 이제 그만! 🔥
              <br />
              함께 성장하는 면접 커뮤니티
            </SubText>
            <CTAButton>1분 만에 시작하기 🚀</CTAButton>
          </LeftContent>

          <RightContent>
            <FeatureCard $position='top'>
              <CardIcon $color='#8B7BE8'>📝</CardIcon>
              <CardTitle>학격 전략 공유</CardTitle>
              <CardDescription>
                다른 사람들의 면접 준비 방법,
                <br />
                면접 노트를 확인해보요.
              </CardDescription>
            </FeatureCard>

            <FeatureCard $position='bottom-left'>
              <CardIcon $color='#7B9BE8'>📄</CardIcon>
              <CardTitle>AI 면접 분석</CardTitle>
              <CardDescription>
                내 답변을 분석하고
                <br />
                완벽한 피드백까지!
              </CardDescription>
            </FeatureCard>

            <FeatureCard $position='bottom-right'>
              <CardIcon $color='#E87B9B'>🎯</CardIcon>
              <CardTitle>실전 모의 면접</CardTitle>
              <CardDescription>
                벗기 않고 영상화면,
                <br />
                AI 면접관과 실전 연습!
              </CardDescription>
            </FeatureCard>
          </RightContent>
        </ContentBox>
      </MainSection>
      <Footer></Footer>
    </>
  );
}
