import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { createNewQuiz } from 'api/quiz';
import { useAuth } from 'contexts/AuthContext';

import FactOrFakeQuestion from 'components/FactOrFakeQuestion';
import Loading from 'components/Loading';
import QuizPageLayout from 'components/QuizPageLayout';
import QuizTypeSelect from 'components/QuizTypeSelect';
import TextInput from 'components/TextInput';

import * as S from './styles';

type Inputs = {
  type_quiz_id: number;
  title: string;
  password: string;
};

export default function QuizForm(): JSX.Element {
  const { logout } = useAuth();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const NUMBER_OF_QUESTIONS: string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    setIsLoading(true);
    const requestBody = {
      type_quiz_id: data.type_quiz_id,
      name: data.title,
      questions: NUMBER_OF_QUESTIONS.map((index) => {
        const questionData = {
          position: Number(index),
          text: data[`question-${index}`],
          alternatives: [
            {
              name: 'Fato',
              text: data[`fact-${index}`],
              is_response: data[`radio-${index}`] === 'fact',
            },
            {
              name: 'Fake',
              text: data[`fake-${index}`],
              is_response: data[`radio-${index}`] === 'fake',
            },
          ],
        };

        if (
          data[`question-${index}`] !== '' &&
          data[`fact-${index}`] !== '' &&
          data[`fake-${index}`] !== ''
        )
          return questionData;

        return null;
      }).filter((isNull) => isNull),
    };
    const formData = new FormData();
    formData.append('quiz', JSON.stringify(requestBody));

    const dataTransfer =
      new ClipboardEvent('').clipboardData || new DataTransfer();
    let counter = 0;
    NUMBER_OF_QUESTIONS.forEach((index) => {
      if (data[index].length) {
        dataTransfer.items.add(data[index]['0']);
        formData.append(index, dataTransfer.files[counter]);
        counter += 1;
      }
    });
    try {
      const { data } = await createNewQuiz(formData);
      history.push(`/quiz-download/${data.id}`);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <QuizPageLayout>
      <S.Quiz onSubmit={handleSubmit(onSubmit)}>
        <section>
          <h1>Sobre o quiz</h1>
          <div>
            <TextInput
              register={register('title', {
                required: { value: true, message: 'Este campo é obrigatório' },
              })}
              label="Título do Quiz"
              id="title"
              error={errors.title}
              placeholder="Digite"
            />
            <QuizTypeSelect register={register} />
          </div>
        </section>
        <div className="hr" />
        <section>
          <h1>Quiz</h1>
          {NUMBER_OF_QUESTIONS.map((index) => (
            <FactOrFakeQuestion key={index} index={index} register={register} />
          ))}
        </section>
        <div className="buttons">
          <button type="button" onClick={logout}>
            Cancelar
          </button>
          <button type="submit">
            Criar Quiz
            {isLoading ? (
              <S.LoadingContainer>
                <Loading color="orange" />
              </S.LoadingContainer>
            ) : null}
          </button>
        </div>
      </S.Quiz>
    </QuizPageLayout>
  );
}
