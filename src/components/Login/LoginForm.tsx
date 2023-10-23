import React, { useEffect, useState } from 'react';
import { LoginFormWrapper } from '../styledComponents/LoginFormStyled/LoginFormWrapper';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../styledComponents/Form/Form.styled';
import CustomInput from '../UI/InputUI/CustomInput';
import ButtonForm from '../styledComponents/ButtonFormStyled/ButtonForm.styled';
import ButtonFormWrapper from '../styledComponents/ButtonFormStyled/ButtonFormWrapper.styled';
import { Box, CircularProgress, Modal, Typography } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig';
import Cookies from 'js-cookie';
import CustomInputWrapper from '../styledComponents/CustomInputWrapper/CustomInputWrapper.styled';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [logged, setLogged] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then(async userCredential => {
        const user = userCredential.user;
        const token = await user.getIdToken();
        Cookies.set('uid', user.uid, { expires: 10 });
        Cookies.set('accessToken', token, { expires: 10 });
        setLogged(true);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
        setHasError(true);
      });
  };

  useEffect(() => {
    const hasCookie = Cookies.get('uid');
    if (hasCookie) {
      router('/user');
      window.location.reload();
    }
  }, [logged]);

  if (isLoading) {
    return <CircularProgress size={70} sx={{ color: '#ed6d25' }} />;
  }

  return (
    <Form className='formLogin' onSubmit={handleLogin}>
      <LoginFormWrapper>
        <CustomInputWrapper>
          <div className='input_email_password'>
            {hasError ? (
              <>
                <CustomInput
                  style={{
                    borderRadius: '.5rem',
                    border: '2px solid #ff0000',
                    background: '#ff00001a',
                  }}
                  type='email'
                  placeholder='E-mail'
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                  required
                />
                <Typography style={{ fontSize: '12px', marginRight: 'auto' }} className='errorText'>
                  Email ou senha invalidos
                </Typography>
              </>
            ) : (
              <CustomInput
                type='email'
                placeholder='E-mail'
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                required
              />
            )}
          </div>
          <div className='input_email_password'>
            {hasError ? (
              <>
                <CustomInput
                  type='password'
                  placeholder='Senha'
                  style={{
                    borderRadius: '.5rem',
                    border: '2px solid #ff0000',
                    background: '#ff00001a',
                  }}
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                  required
                />
                <Typography style={{ fontSize: '12px', marginRight: 'auto' }} className='errorText'>
                  Email ou senha invalidos
                </Typography>
              </>
            ) : (
              <CustomInput
                type='password'
                placeholder='Senha'
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                required
              />
            )}
          </div>
        </CustomInputWrapper>

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
