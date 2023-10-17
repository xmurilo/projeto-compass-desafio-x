import { LoginFormHeaderWrapper } from "../styledComponents/LoginFormHeaderStyled/LoginFormHeaderWrapper";
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
