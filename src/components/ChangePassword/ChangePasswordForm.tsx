import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../UI/InputUI/CustomInput';
import Form from '../styledComponents/Form/Form.styled';
import ButtonForm from '../styledComponents/ButtonFormStyled/ButtonForm.styled';
import CustomInputWrapper from '../styledComponents/CustomInputWrapper/CustomInputWrapper.styled';
import ButtonFormWrapper from '../styledComponents/ButtonFormStyled/ButtonFormWrapper.styled';

const ChangePasswordForm: FC = () => {
  const router = useNavigate();
  return (
    <>
      <Form onSubmit={() => router('/login')}>
        <CustomInputWrapper>
          <CustomInput
            type="text"
            placeholder="Informe o Código"
            className="sendCodeInput"
            required
          />
          <CustomInput
            type="password"
            placeholder="Nova senha"
            className="passwordInput"
            required
          />
          <CustomInput
            type="password"
            placeholder="Confirmar a senha"
            className="rePasswordInput"
            required
          />

          <ButtonFormWrapper>
            <ButtonForm className="changePasswordSaveButton">Salvar</ButtonForm>
          </ButtonFormWrapper>
        </CustomInputWrapper>
        <p className="cPRememberedPassword">Lembrou sua Senha?</p>
      </Form>

      <ButtonFormWrapper>
        <ButtonForm className="loginCredentialsButton" onClick={() => router('/login')}>
          Entrar com as credenciais
        </ButtonForm>
      </ButtonFormWrapper>
    </>
  );
};

export default ChangePasswordForm;
