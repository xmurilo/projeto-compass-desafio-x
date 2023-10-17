import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../UI/InputUI/CustomInput';
import CustomInputWrapper from '../styledComponents/CustomInputWrapper/CustomInputWrapper.styled';
import ButtonForm from '../styledComponents/ButtonFormStyled/ButtonForm.styled';
import Form from '../styledComponents/Form/Form.styled';
import ButtonFormWrapper from '../styledComponents/ButtonFormStyled/ButtonFormWrapper.styled';

const RPForm: React.FC = () => {
  const router = useNavigate();

  return (
    <Fragment>
      <Form onSubmit={() => router('/changePassword')}>
        <CustomInputWrapper>
          <CustomInput
            type="email"
            placeholder="E-mail cadastrado"
            className="registeredEmailInput"
            required
          />
        </CustomInputWrapper>
        <ButtonFormWrapper>
          <ButtonForm className="sendCodeButton">Enviar código</ButtonForm>
          <p className="rememberedPassword">Lembrou sua Senha?</p>
        </ButtonFormWrapper>
      </Form>
      <ButtonForm className="loginCredentialsButton" onClick={() => router('/login')}>
        Entrar com as Credenciais
      </ButtonForm>
    </Fragment>
  );
};

export default RPForm;
