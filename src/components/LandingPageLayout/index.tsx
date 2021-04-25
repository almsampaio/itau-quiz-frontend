import { ReactNode } from 'react';
import logoImg from '../../assets/logo.svg';

import { Container, SubContainer, FormContainer, Hero } from './styles';

interface HeroProps {
  children: ReactNode;
}

export function LandingPageLayout({ children }: HeroProps) {
  return (
    <Container>
      <SubContainer>
        <Hero>
          <img src={ logoImg } alt="Itaú"/>
          <h1>Quiz</h1>
        </Hero>
        <FormContainer>
          <div className="blue-shadow" />
          <div className="blue-border">
            {children}
          </div>
        </FormContainer>
      </SubContainer>
    </Container>
  );
};
