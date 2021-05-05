import React, { useState } from 'react';
import { LandingPageLayout } from '../../components/LandingPageLayout';
import { TextInput } from '../../components/TextInput';
import { Loading } from '../../components/Loading';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Form } from './styles';

type Inputs = {
  password: string;
  confirm: string;
};

export function ResetPassword() : JSX.Element {
  const { updateAuth } = useAuth();
  const history = useHistory();
  const { token } = useParams<{ token: string }>();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    try {
      await api.post('/reset_password', { password: data.password }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      updateAuth(token);
      history.push('/');
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }; 

  return (
    <LandingPageLayout>
      {isLoading
        ? <Loading color="orange" />
        : (
        <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Quizes</h1>
        <p>Redefinir senha</p>

        <TextInput
            register={register("password", {
              required: { value: true, message: 'Este campo é obrigatório' },
            })}
            type="password"
            label="Nova senha"
            id="password"
            error={errors.password}
        />

        <TextInput
            register={register("confirm", {
              required: { value: true, message: 'Este campo é obrigatório' },
              validate: (confirm) => confirm === getValues('password') || 'Senhas não coincidem',
            })}
            type="password"
            label="Confirmação nova senha"
            id="confirm"
            error={errors.confirm}
        />

        <div>
          <input type="submit" value="Entrar" />
          <Link to="/login">Voltar para login</Link>
        </div>
      </Form>)}
    </LandingPageLayout>
  );
}
