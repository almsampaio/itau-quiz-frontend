import logoImg from '../../assets/logo.svg';

import { Container, SubContainer, Hero } from './styles';

export function Login() {
  return (
    <Container>
      <SubContainer>
        <Hero>
          <img src={ logoImg } alt="Itaú"/>
          <h1>Quiz</h1>
        </Hero>
        <div>aloha</div>
      </SubContainer>
    </Container>
  );
};
