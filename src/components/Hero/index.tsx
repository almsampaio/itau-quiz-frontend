import { ReactNode } from 'react';
import logoImg from '../../assets/logo.svg';

import { Container, SubContainer, HeroDiv } from './styles';

interface HeroProps {
  children: ReactNode;
}

export function Hero({ children }: HeroProps) {
  return (
    <Container>
      <SubContainer>
        <HeroDiv>
          <img src={ logoImg } alt="Itaú"/>
          <h1>Quiz</h1>
        </HeroDiv>
        {children}
      </SubContainer>
    </Container>
  );
};
