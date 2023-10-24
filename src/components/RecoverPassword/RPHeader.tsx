import React from "react";
import { RPHeaderWrapper } from "../styledComponents/RPHeaderStyled/RPHeaderWrapper.styled";

const RPHeader: React.FC = () => {
  return (
    <RPHeaderWrapper>
      <img
        src={require("../../assets/icons/ps_orkut.svg").default}
        alt="logo"
      />
      <h2>Recupere sua senha</h2>
    </RPHeaderWrapper>
  );
};

export default RPHeader;
