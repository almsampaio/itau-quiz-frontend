import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import { InputContainer } from './styles';

export interface TextInputProps {
  id: string;
  accept?: string;
  label?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  type?: string;
  placeholder?: string
  className?: string;
}

export function TextInput({ register, error, label, id, type, placeholder, className, accept }: TextInputProps) : JSX.Element {
  return (
      <InputContainer className={`${className} ${type==='file' ? 'file-input' : ''}`}>
        <label htmlFor={id}>{label}</label>
        <input
          {...register}
          accept={accept}
          id={id}
          type={type}
          placeholder={placeholder}
          />
        {error && <span>{error.message}</span>}
      </InputContainer>
  );
}