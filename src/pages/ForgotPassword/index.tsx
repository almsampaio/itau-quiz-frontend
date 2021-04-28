import React from 'react';
import { LandingPageLayout } from '../../components/LandingPageLayout';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";

import { Form } from './styles';

type Inputs = {
  email: string;
};

export function ForgotPassword() : JSX.Element {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = async (email) => {
    console.log(email);
    // try {
    //   const { data } = await axios.post('loginLink', { user });
    //   setStore(prevState => ({...prevState, auth: data}));
    // } catch (error) { console.log(error) }
  }; 

  return (
    <LandingPageLayout>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Quizes</h1>
        <p>Redefinir senha</p>
        
        <div>
          <label>E-mail</label>
          <input
            {...register("email", {
              required: { value: true, message: 'Este campo é obrigatório' },
              pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: 'E-mail inválido' },
            })}
            />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <p className="password-instructions">Informe o e-mail para o qual você deseja redefinir a senha.</p>

        <div>
          <input type="submit" value="Enviar" />
          <Link to="/login">Voltar para login</Link>
        </div>
      </Form>
    </LandingPageLayout>
  );
}
