import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

import { requestPasswordReset } from 'api/user';

import Loading from 'components/common/Loading';
import TextInput from 'components/common/TextInput';
import LandingPageLayout from 'components/layout/LandingPageLayout';

import * as S from './styles';

type Inputs = {
  email: string;
};

export default function ForgotPassword(): JSX.Element {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    try {
      await requestPasswordReset(data.email);
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
        <S.Form onSubmit={handleSubmit(onSubmit)}>
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
        </S.Form>
      )}
    </LandingPageLayout>
  );
}
