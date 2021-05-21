import { FieldError, UseFormRegister } from 'react-hook-form';

import TextInput from 'components/common/TextInput';
import QuizTypeSelect from 'components/organism/QuizTypeSelect';

import * as S from './styles';

interface Inputs {
  type_quiz_id: number;
  title: string;
  password: string;
}

interface QuizFormHeaderProps {
  register: UseFormRegister<Inputs>;
  error?: FieldError;
}

export default function QuizFormHeader({
  register,
  error,
}: QuizFormHeaderProps) {
  return (
    <S.Container>
      <h1 className="about-quiz">Sobre o quiz</h1>
      <div>
        <TextInput
          register={register('title', {
            required: { value: true, message: 'Este campo é obrigatório' },
          })}
          label="Título do Quiz"
          id="title"
          error={error}
          placeholder="Digite"
        />
        <QuizTypeSelect register={register} />
      </div>
    </S.Container>
  );
}
