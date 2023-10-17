import React, { useState } from 'react';
import { LoginFormWrapper } from '../styledComponents/LoginFormStyled/LoginFormWrapper';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../styledComponents/Form/Form.styled';
import CustomInput from '../UI/InputUI/CustomInput';
import ButtonForm from '../styledComponents/ButtonFormStyled/ButtonForm.styled';
import ButtonFormWrapper from '../styledComponents/ButtonFormStyled/ButtonFormWrapper.styled';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const router = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (loading) {
    return (
      <p
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: '#000',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Carregando
      </p>
    );
  }

  if (user) {
    console.log(user);
  }

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
