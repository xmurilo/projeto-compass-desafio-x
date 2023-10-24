import { LoginFormHeaderWrapper } from "../styledComponents/LoginFormHeaderStyled/LoginFormHeaderWrapper.styled";
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";

const LoginHeaderForm = () => {
  return (
    <LoginFormHeaderWrapper className="LoginFormHeaderWrapper">
      <LoginHeader />
      <LoginForm />
    </LoginFormHeaderWrapper>
  );
};

export default LoginHeaderForm;
