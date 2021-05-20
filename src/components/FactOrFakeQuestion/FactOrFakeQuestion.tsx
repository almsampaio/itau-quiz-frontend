/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useState } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import checkmarkImg from 'assets/checkmark.svg';

import TextInput from 'components/TextInput';

import * as S from './styles';

interface FactOrFakeQuestionProps {
  index: string;
  register: UseFormRegister<any>;
  errors?: FieldErrors;
}

export default function FactOrFakeQuestion({
  index,
  register,
  errors,
}: FactOrFakeQuestionProps): JSX.Element {
  const [answer, setAnswer] = useState('fact');

  const question = `question-${index}`;
  const factText = `fact-${index}`;
  const fakeText = `fake-${index}`;
  const radiobox = `radio-${index}`;
  const fileInput = index;

  return (
    <S.Container>
      <div>
        <S.IndexAndQuestion>
          <p>{index.padStart(2, '0')}</p>
          <TextInput
            register={register(question, {
              required: {
                value: index === '1' ? true : false,
                message: 'Este campo é obrigatório',
              },
            })}
            label="Pergunta"
            id={question}
            error={errors && errors[question]}
            placeholder="Digite"
          />
        </S.IndexAndQuestion>
        <S.OptionsAndDescriptions>
          <div className="description">
            <p>Descrição</p>
            <div>Fato</div>
            <div>Fake</div>
          </div>

          <div className="options">
            <p>Resposta</p>
            <S.RadioBox
              className={answer === 'fact' ? 'active' : ''}
              id={`${radiobox}-fact`}
              onClick={() => {
                setAnswer('fact');
              }}
              isActive={answer === 'fact'}
            >
              <img src={checkmarkImg} alt="Marcado" />
              <input
                value="fact"
                type="radio"
                {...register(radiobox)}
                id={`${radiobox}-fact`}
                hidden
                checked
              />
            </S.RadioBox>
            <S.RadioBox
              className={answer === 'fake' ? 'active' : ''}
              id={`${radiobox}-fake`}
              onClick={() => {
                setAnswer('fake');
              }}
              isActive={answer === 'fake'}
            >
              <img src={checkmarkImg} alt="Marcado" />
              <input
                value="fake"
                type="radio"
                {...register(radiobox)}
                id={`${radiobox}-fake`}
                hidden
              />
            </S.RadioBox>
          </div>

          <div className="feedbacks">
            <p>Texto complementar</p>
            <TextInput
              register={register(factText, {
                required: {
                  value: index === '1' ? true : false,
                  message: 'Este campo é obrigatório',
                },
              })}
              id={factText}
              error={errors && errors[factText]}
              placeholder="Fato"
            />
            <TextInput
              register={register(fakeText, {
                required: {
                  value: index === '1' ? true : false,
                  message: 'Este campo é obrigatório',
                },
              })}
              id={fakeText}
              error={errors ? errors[fakeText] : null}
              placeholder="Fake"
            />
          </div>
        </S.OptionsAndDescriptions>
      </div>
      <TextInput
        className="file-input"
        type="file"
        register={register(fileInput)}
        label="Adicionar ícone"
        accept="image/*"
        id={fileInput}
        error={errors && errors[fileInput]}
        placeholder="Upload"
      />
    </S.Container>
  );
}
