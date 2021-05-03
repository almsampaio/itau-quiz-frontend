import React from 'react';
import { Container, Aside, Quiz, AsideBordersDesign, AsideContainer } from './styles';
import { TextInput } from '../../components/TextInput';
import { FactOrFakeQuestion } from '../../components/FactOrFakeQuestion';
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { useHistory } from 'react-router-dom';

type Inputs = {
  title: string;
  password: string;
};

export function QuizForm() : JSX.Element {
  const {updateAuth} = useAuth();
  const history = useHistory();
  const NUMBER_OF_QUESTIONS : string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data ) => {
    console.log(data)
    try {
      // const { data } = await api.post('/authenticate', user, {
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
      // updateAuth(data.token);
      history.push('/');
    } catch (error) { console.log(error) }
  }; 

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
      <Quiz onSubmit={handleSubmit(onSubmit)}>
        <section>
          <h1>Sobre o quiz</h1>
          <div>
            <TextInput
                register={register("title", {
                  required: { value: true, message: 'Este campo é obrigatório' },
                })}
                label="Título do Quiz"
                id="title"
                error={errors.title}
                placeholder="Digite"
            />
            <div>
              <label>Tipo de Quiz</label>
              <select name="" defaultValue="">
                <option value="" disabled hidden>Selecione</option>
                <option value="">Fato ou Fake</option>
              </select>
            </div>
          </div>
        </section>
        <div className="hr"/>
        <section>
          <h1>Quiz</h1>
          {NUMBER_OF_QUESTIONS.map((index) => (
            <FactOrFakeQuestion key={index} index={ index } register={register} />
          ))}
        </section>
        <div className="buttons">
          <button type="button">Cancelar</button>
          <button type="submit">Criar Quiz</button>
        </div>
      </Quiz>
    </Container>
  );
}
