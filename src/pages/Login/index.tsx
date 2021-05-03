import React from 'react';
import { LandingPageLayout } from '../../components/LandingPageLayout';
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Form } from './styles';

type Inputs = {
  email: string;
  password: string;
};

export function Login() : JSX.Element {
  const {updateAuth} = useAuth();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = async (user) => {
    try {
      const { data } = await api.post('/authenticate', user, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      updateAuth(data.token);
      history.push('/');
    } catch (error) { console.log(error) }
  }; 

  console.log('login page')
  return (
    <LandingPageLayout>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Quizes</h1>
        <p>Entrar na plataforma</p>
        
        <div>
          <label>E-mail</label>
          <input
            {...register("email", {
              required: { value: true, message: 'Este campo é obrigatório' },
              pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: 'E-mail inválido'},
            })}
            />
          {errors.email && <span>{errors.email.message}</span>}
          {console.log(register)}
        </div>

        <div>
          <label>Senha</label>
          <input
            type="password"
            {...register("password", {
              required: { value: true, message: 'Este campo é obrigatório' },
            })}
            />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <div>
          <input type="submit" value="Entrar" />
          <Link to="/forgot-password">Esqueci minha senha</Link>
        </div>
      </Form>
    </LandingPageLayout>
  );
}
