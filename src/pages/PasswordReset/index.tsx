import { LandingPageLayout } from '../../components/LandingPageLayout';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";

import { Form } from './styles';

type Inputs = {
  newPassword: string;
  confirmPassword: string;
};

export function PasswordReset() {

  const {
    register,
    handleSubmit,
    // formState: { errors }
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
          <label>Nova senha</label>
          <input
            type="password"
            {...register("newPassword", { required: true})}
            />
          {/* {errors.password && <p>This field is required</p>} */}
        </div>

        <div>
          <label>Confirmação nova senha</label>
          <input
            type="password"
            {...register("confirmPassword", { required: true})}
            />
          {/* {errors.password && <p>This field is required</p>} */}
        </div>

        <div>
          <input type="submit" value="Entrar" />
        </div>
      </Form>
    </LandingPageLayout>
  );
};
