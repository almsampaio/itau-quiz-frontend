import { ReactNode } from 'react';

import logoImg from 'assets/logo.svg';

import * as S from './styles';

interface QuizPageLayoutProps {
  children: ReactNode;
}

export default function QuizPageLayout({
  children,
}: QuizPageLayoutProps): JSX.Element {
  return (
    <S.Container>
      <S.Aside>
        <img src={logoImg} alt="Itaú" />
        <S.AsideBordersDesign>
          <div className="blue-shadow" />
          <div className="blue-border">
            <S.AsideContainer>
              <h1>Quizes</h1>
            </S.AsideContainer>
          </div>
        </S.AsideBordersDesign>
      </S.Aside>
      {children}
    </S.Container>
  );
}
