import { ReactNode } from 'react';

import logoImg from 'assets/logo.svg';

import * as S from './styles';

interface HeroProps {
  children: ReactNode;
}

export default function LandingPageLayout({
  children,
}: HeroProps): JSX.Element {
  return (
    <S.Container>
      <S.SubContainer>
        <S.Hero>
          <img src={logoImg} alt="Itaú" />
          <h1>Quiz</h1>
        </S.Hero>
        <S.FormBordersDesign>
          <div className="blue-shadow" />
          <div className="blue-border">
            <S.FormContainer>{children}</S.FormContainer>
          </div>
        </S.FormBordersDesign>
      </S.SubContainer>
    </S.Container>
  );
}
