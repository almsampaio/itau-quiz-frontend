import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

import { api } from 'api/config';

import { LandingPageLayout } from 'components/LandingPageLayout';
import { Loading } from 'components/Loading';
import { TextInput } from 'components/TextInput';

import { Form } from './styles';

type Inputs = {
  email: string;
};

export function ForgotPassword(): JSX.Element {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (email) => {
    setIsLoading(true);
    try {
      await api.post('/forgot_password', email);
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
          <p>Redefinir senha</p>

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

          <p className="password-instructions">
            Informe o e-mail para o qual você deseja redefinir a senha.
          </p>

          <div>
            <input type="submit" value="Enviar" />
            <Link to="/login">Voltar para login</Link>
          </div>
        </Form>
      )}
    </LandingPageLayout>
  );
}
