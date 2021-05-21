import { useCallback, useEffect, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { getQuizTypes } from 'api/quiz';

import * as S from './styles';

interface Inputs {
  type_quiz_id: number;
  title: string;
  password: string;
}

interface QuizTypeSelectProps {
  register: UseFormRegister<Inputs>;
}

export default function QuizTypeSelect({
  register,
}: QuizTypeSelectProps): JSX.Element {
  const [quizTypes, setQuizTypes] = useState([]);

  const listQuizTypes = useCallback(async () => {
    try {
      const { data } = await getQuizTypes();
      setQuizTypes(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    listQuizTypes();
  }, [listQuizTypes]);

  return (
    <S.Container>
      <label>Tipo de Quiz</label>
      <select
        {...register('type_quiz_id', {
          required: {
            value: true,
            message: 'Este campo é obrigatório',
          },
        })}
        defaultValue=""
      >
        <option value="" disabled hidden>
          Selecione
        </option>
        {quizTypes.map(({ id, name }) => (
          <option key={name} value={id}>
            {name}
          </option>
        ))}
      </select>
    </S.Container>
  );
}
