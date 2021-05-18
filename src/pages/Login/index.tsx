import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

import { api } from 'api/config';
import { useAuth } from 'contexts/AuthContext';

import { LandingPageLayout } from 'components/LandingPageLayout';
import { Loading } from 'components/Loading';
import { TextInput } from 'components/TextInput';

import { Form } from './styles';

type Inputs = {
  email: string;
  password: string;
};

export function Login(): JSX.Element {
  const { updateAuth } = useAuth();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (user) => {
    setIsLoading(true);
    try {
      const { data } = await api.post('/authenticate', user, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      updateAuth(data.token);
      history.push('/');
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <LandingPageLayout>
      {isLoading ? (
        <Loading color="orange" />
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1>Quizes</h1>
          <p>Entrar na plataforma</p>

          <TextInput
            register={register('email', {
              required: { value: true, message: 'Este campo é obrigatório' },
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: 'E-mail inválido',
              },
            })}
            label="E-mail"
            id="email"
            error={errors.email}
          />

          <TextInput
            register={register('password', {
              required: { value: true, message: 'Este campo é obrigatório' },
            })}
            type="password"
            label="Senha"
            id="password"
            error={errors.password}
          />

          <div>
            <button type="submit">Entrar</button>
            <Link to="/forgot-password">Esqueci minha senha</Link>
          </div>
        </Form>
      )}
    </LandingPageLayout>
  );
}
