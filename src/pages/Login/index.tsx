import { LandingPageLayout } from '../../components/LandingPageLayout';
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useStore } from '../../hooks/store';
import axios from 'axios';

import { Form } from './styles';

type Inputs = {
  email: string;
  password: string;
};

export function Login() {
  const [setStore] = useStore();

  const {
    register,
    handleSubmit,
    // formState: { errors }
  } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = async (user) => {
    console.log(user);
    // try {
    //   const { data } = await axios.post('loginLink', { user });
    //   setStore(prevState => ({...prevState, auth: data}));
    // } catch (error) { console.log(error) }
  }; 

  return (
    <LandingPageLayout>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Quizes</h1>
        <p>Entrar na plataforma</p>
        
        <div>
          <label>E-mail</label>
          <input
            {...register("email", {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
            />
          {/* {errors.email && <p>Enter a valid email</p>} */}
        </div>

        <div>
          <label>Senha</label>
          <input
            type="password"
            {...register("password", { required: true})}
            />
          {/* {errors.password && <p>This field is required</p>} */}
        </div>

        <div>
          <input type="submit" value="Entrar" />
          <Link to="/forgot-password">Esqueci minha senha</Link>
        </div>
      </Form>
    </LandingPageLayout>
  );
};
