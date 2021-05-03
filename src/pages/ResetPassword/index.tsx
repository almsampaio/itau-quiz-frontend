import React from 'react';
import { LandingPageLayout } from '../../components/LandingPageLayout';
import { Link } from 'react-router-dom';
// , useParams
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
  // const { token } = useParams();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    // try {
    //   const { data } = await api.post('/reset_password', { password: data.password }, {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // });
    //   updateAuth(token);
    // } catch (error) { console.log(error) }
  }; 

  return (
    <LandingPageLayout>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Quizes</h1>
        <p>Redefinir senha</p>
        
        <div>
          <label>Nova senha</label>
          <input
            type="password"
            {...register("password", {
              required: { value: true, message: 'Este campo é obrigatório' },
            })}
            />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <div>
          <label>Confirmação nova senha</label>
          <input
            type="password"
            {...register("confirm", {
              required: { value: true, message: 'Este campo é obrigatório'},
              validate: (confirm) => confirm === getValues('password') || 'Senhas não coincidem',
            })}
            />
          {errors.confirm && <span>{errors.confirm.message}</span>}
        </div>

        <div>
          <input type="submit" value="Entrar" />
          <Link to="/login">Voltar para login</Link>
        </div>
      </Form>
    </LandingPageLayout>
  );
}
