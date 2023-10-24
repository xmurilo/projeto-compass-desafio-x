import React from "react";
import { LoginHeaderWrapper } from "../styledComponents/LoginHeaderStyled/LoginHeaderWrapper.styled";

const LoginHeader: React.FC = () => {
  return (
    <LoginHeaderWrapper>
      <img
        src={require("../../assets/icons/ps_orkut.svg").default}
        alt="logo"
      />
      <h2>Acesse o UOLkut</h2>
    </LoginHeaderWrapper>
  );
};

export default LoginHeader;
