import React, { useEffect, useState } from 'react';
import { QuizPageLayout } from '../../components/QuizPageLayout';
import { TextInput } from '../../components/TextInput';
import { FactOrFakeQuestion } from '../../components/FactOrFakeQuestion';
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { useHistory } from 'react-router-dom';

import { Quiz, LoadingContainer } from './styles';
import { Loading } from '../../components/Loading';

type Inputs = {
  type_quiz_id: number;
  title: string;
  password: string;
};

export function QuizForm() : JSX.Element {
  const [quizTypes, setQuizTypes] = useState([]);
  const { auth, updateAuth } = useAuth();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const NUMBER_OF_QUESTIONS : string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    setIsLoading(true);
    const requestBody = {
      type_quiz_id: data.type_quiz_id,
      name: data.title,
      questions: NUMBER_OF_QUESTIONS.map((index) => ({
        position: Number(index),
        text: data[`question-${index}`],
        alternatives: [
          {
            name: 'Fato',
            text: data[`fact-${index}`],
            //is_response: data[`answer-${index}`] === 'Fato',
            is_response: true,
          },
          {
            name: 'Fake',
            text: data[`fake-${index}`],
            //is_response: data[`answer-${index}`] === 'Fake',
            is_response: false,
          }
        ]
      }))
    };
    const formData = new FormData();
    formData.append('quiz', JSON.stringify(requestBody));

    const dataTransfer = new ClipboardEvent('').clipboardData || new DataTransfer();
    let counter = 0;
    NUMBER_OF_QUESTIONS.forEach((index) => {
      if (data[index].length) {
        dataTransfer.items.add(data[index]['0'])
        formData.append(index, dataTransfer.files[counter]);
        counter += 1;
      }
    });  
    try {
      const { data } = await api.post('/complete_quiz', formData, {
        headers: {
          'Authorization': `Bearer ${auth.token}`,
          'Content-Type': 'multipart/form-data'
        },
      });
      history.push(`/quiz-download/${data.id}`);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getQuizTypes();
  }, []);

  async function getQuizTypes () {
    try {
      const { data } = await api.get('/type_quiz', {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        }
      });
      setQuizTypes(data);
    } catch (error) {
      console.log(error);
    }
  }

  function logout() {
    updateAuth('');
    history.push('/');
  }

  return (
    <QuizPageLayout>
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
              <select
                {...register("type_quiz_id", {
                  required: { value: true, message: 'Este campo é obrigatório'}
                })}
                defaultValue=""
              >
                <option value="" disabled hidden>Selecione</option>
                {quizTypes.map(({id, name}) => (
                  <option key={name} value={id}>{name}</option>
                ))}
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
          <button type="button" onClick={logout}>Cancelar</button>
          <button type="submit">
            Criar Quiz
            {isLoading
                ? (
                <LoadingContainer>
                  <Loading color="orange" />
                </LoadingContainer>)
                : null}
          </button>
        </div>
      </Quiz>
    </QuizPageLayout>
  );
}
