import { ReactNode } from 'react';
import logoImg from '../../assets/logo.svg';

import {
  Container,
  SubContainer,
  FormBordersDesign,
  FormContainer,
  Hero,
} from './styles';

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
        <FormBordersDesign>
          <div className="blue-shadow" />
          <div className="blue-border">
            <FormContainer>
              {children}
            </FormContainer>
          </div>
        </FormBordersDesign>
      </SubContainer>
    </Container>
  );
};
