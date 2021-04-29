import React from 'react';
import { Container, SubContainer, Aside, Quiz, AsideBordersDesign, AsideContainer } from './styles';
import logoImg from '../../assets/logo.svg';

export function QuizForm() : JSX.Element {
  return (
    <Container>
      <SubContainer>
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
        <Quiz>
          <section>
            <h1>Sobre o quiz</h1>
            <div>
              <label>
                Título do Quiz
                <input type="text"/>
              </label>
              <label>
                Tipo de Quiz
                <select name="">
                  <option value="">Fato ou Fake</option>
                </select>
              </label>
            </div>
          </section>
          <hr/>
          <section>
            <h1>Quiz</h1>
          </section>
          <button type="button">Cancelar</button>
          <button type="submit">Criar Quiz</button>
        </Quiz>
      </SubContainer>
    </Container>
  );
}
