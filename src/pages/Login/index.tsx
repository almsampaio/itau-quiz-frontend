import { LandingPageLayout } from '../../components/LandingPageLayout';
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from 'react-router-dom';

import { Container, SubContainer } from './styles';

type Inputs = {
  email: string;
  password: string;
};

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  }; 

  return (
    <LandingPageLayout>
      <Container>
        <SubContainer>
          <h1>Quizes</h1>
          <p>Entrar na plataforma</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>E-mail</label>
            <input
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
            />
            {/* {errors.email && <p>Enter a valid email</p>} */}

            <label>Senha</label>
            <input
              {...register("password", { required: true})}
            />
            {/* {errors.password && <p>This field is required</p>} */}

            <div>
              <input type="submit" value="Entrar" />
              <Link to="/forgot-password">Esqueci minha senha</Link>
            </div>
          </form>
        </SubContainer>
      </Container>
    </LandingPageLayout>
  );
};
