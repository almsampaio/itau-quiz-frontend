/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { TextInput } from '../TextInput';

import { Container, IndexAndQuestion, OptionsAndDescriptions } from './styles';

interface FactOrFakeQuestionProps {
  index: string;
  register: UseFormRegister<any>;
  errors?: FieldErrors;
}

export function FactOrFakeQuestion({index, register, errors} : FactOrFakeQuestionProps ) : JSX.Element {
  const question = `question-${index}`;
  const factText = `fact-${index}`;
  const fakeText = `fake-${index}`;
  const fileInput = `file-${index}`;

  return (
      <Container>
        <div>
          <IndexAndQuestion>
            <p>{ index.padStart(2, '0') }</p>
            <TextInput
              register={register(question, {
                required: { value: true, message: 'Este campo é obrigatório' },
              } )}
              label="Pergunta"
              id={question}
              error={errors && errors[question]}
              placeholder="Digite"
            />
          </IndexAndQuestion>
          <OptionsAndDescriptions>
            <div className="description">
              <p>Descrição</p>
              <div>Fato</div>
              <div>Fake</div>
            </div>

            <div className="options">
              <p>Resposta</p>
              <div>V</div>
              <div>F</div>
            </div>

            <div className="feedbacks">
              <p>Texto complementar</p>
              <TextInput
                register={register(factText, {
                  required: { value: true, message: 'Este campo é obrigatório' },
                } )}
                id={factText}
                error={errors && errors[factText]}
                placeholder="Fato"
              />
              <TextInput
                register={register(fakeText, {
                  required: { value: true, message: 'Este campo é obrigatório' },
                } )}
                id={fakeText}
                error={errors ? errors[fakeText] : null}
                placeholder="Fake"
              />
            </div>
          </OptionsAndDescriptions>
        </div>
        <TextInput
          className="file-input"
          type="file"
          register={register(fileInput)}
          label="Adicionar ícone"
          id={fileInput}
          error={errors && errors[fileInput]}
          placeholder="Upload"
        />
      </Container>
  );
}