import React, { useState } from 'react';
import { LoginFormWrapper } from '../styledComponents/LoginFormStyled/LoginFormWrapper';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../styledComponents/Form/Form.styled';
import CustomInput from '../UI/InputUI/CustomInput';
import ButtonForm from '../styledComponents/ButtonFormStyled/ButtonForm.styled';
import ButtonFormWrapper from '../styledComponents/ButtonFormStyled/ButtonFormWrapper.styled';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === 'usuario@gmail.com' && password === '123') {
      router('/user');
    } else {
      setError('Credenciais incorretas');
    }
  };

  return (
    <Form className="formLogin" onSubmit={handleLogin}>
      <LoginFormWrapper>
        <div className="input_email_password">
          <CustomInput
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required
          />
        </div>
        <div className="input_email_password">
          <CustomInput
            type="password"
            placeholder="Senha"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            required
          />
        </div>

        <div className="input_checkbox">
          <input type="checkbox" />
          <label htmlFor="">Lembrar minha senha</label>
        </div>

        <ButtonFormWrapper className="buttons">
          <ButtonForm className="loginAccountButton" type="submit">
            Entrar na conta
          </ButtonForm>
          <ButtonForm
            className="createAccountButton"
            type="button"
            onClick={() => router('/register')}
          >
            Criar conta
          </ButtonForm>
          <Link to="/recoverPassword" className="forgotPassword">
            Esqueci a minha senha
          </Link>
        </ButtonFormWrapper>
      </LoginFormWrapper>
    </Form>
  );
};

export default LoginForm;
