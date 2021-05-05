import React, { ReactNode } from 'react';
import logoImg from '../../assets/logo.svg';

import { Container, Aside, AsideBordersDesign, AsideContainer } from './styles';

interface QuizPageLayoutProps {
  children: ReactNode;
}

export function QuizPageLayout({children} : QuizPageLayoutProps) : JSX.Element {
  return (
    <Container>
      <Aside>
        <img src={ logoImg } alt="Itaú"/>
        <AsideBordersDesign>
          <div className="blue-shadow" />
          <div className="blue-border">
            <AsideContainer>
              <h1>Quizes</h1>
            </AsideContainer>
          </div>
        </AsideBordersDesign>
      </Aside>
      {children}
    </Container>
  );
}
