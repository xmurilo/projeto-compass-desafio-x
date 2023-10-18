import React, { useState } from 'react';
import { LoginFormWrapper } from '../styledComponents/LoginFormStyled/LoginFormWrapper';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../styledComponents/Form/Form.styled';
import CustomInput from '../UI/InputUI/CustomInput';
import ButtonForm from '../styledComponents/ButtonFormStyled/ButtonForm.styled';
import ButtonFormWrapper from '../styledComponents/ButtonFormStyled/ButtonFormWrapper.styled';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useNavigate();

  // const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user);
        // * Procurar lib de cookies
        // * Salvar Access token nos cookies 
        // * Salvar uid nos cookies
        // * na tela User useEffect com função fetch(method:"get") para buscar dados do usuario no ID 
        router('/user');
      })
      .catch(err => {
        alert(err);
      });
  };

  // if (loading) {
  //   return (
  //     <p
  //       style={{
  //         width: '100vw',
  //         height: '100vh',
  //         backgroundColor: '#000',
  //         color: 'white',
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //       }}
  //     >
  //       Carregando
  //     </p>
  //   );
  // }

  // if (user) {
  //   console.log(user);
  // }

  return (
    <Form className='formLogin' onSubmit={handleLogin}>
      <LoginFormWrapper>
        <div className='input_email_password'>
          <CustomInput
            type='email'
            placeholder='E-mail'
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required
          />
        </div>
        <div className='input_email_password'>
          <CustomInput
            type='password'
            placeholder='Senha'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            required
          />
        </div>

        <div className='input_checkbox'>
          <input type='checkbox' />
          <label htmlFor=''>Lembrar minha senha</label>
        </div>

        <ButtonFormWrapper className='buttons'>
          <ButtonForm className='loginAccountButton' type='submit'>
            Entrar na conta
          </ButtonForm>
          <ButtonForm
            className='createAccountButton'
            type='button'
            onClick={() => router('/register')}
          >
            Criar conta
          </ButtonForm>
          <Link to='/recoverPassword' className='forgotPassword'>
            Esqueci a minha senha
          </Link>
        </ButtonFormWrapper>
      </LoginFormWrapper>
    </Form>
  );
};

export default LoginForm;
