import React from 'react';
import { LandingPageLayout } from '../../components/LandingPageLayout';
import { Link } from 'react-router-dom';
// , useParams
import { useForm, SubmitHandler } from "react-hook-form";

import { Form } from './styles';

type Inputs = {
  newPassword: string;
  confirmPassword: string;
};

export function ResetPassword() : JSX.Element {
  // const { token } = useParams();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    // const resetPasswordData = {
    //   token,
    //   newPassword: data.newPassword,
    // }
    // try {
    //   const { data } = await axios.post('resetPasswordLink', resetPasswordData);
    //   setStore(prevState => ({...prevState, auth: data}));
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
            {...register("newPassword", { required: { value: true, message: 'Este campo é obrigatório' }})}
            />
          {errors.newPassword && <span>{errors.newPassword.message}</span>}
        </div>

        <div>
          <label>Confirmação nova senha</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: { value: true, message: 'Este campo é obrigatório'},
              validate: (confirmPassword) => confirmPassword === getValues('newPassword') || 'Senhas não coincidem',
            })}
            />
          {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
          {console.log(errors.confirmPassword)}
        </div>

        <div>
          <input type="submit" value="Entrar" />
          <Link to="/login">Voltar para login</Link>
        </div>
      </Form>
    </LandingPageLayout>
  );
}
