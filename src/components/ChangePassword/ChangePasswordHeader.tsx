import React from "react";
import {ChangePasswordHeaderWrapper} from "../styledComponents/ChangePasswordHeaderStyled/ChangePasswordWrapper";

const ChangePasswordHeader: React.FC = () => {
    return (
        <ChangePasswordHeaderWrapper>
            <img
                src={require("../../assets/icons/ps_orkut.svg").default}
                alt="logo"
            />
         <h2>Nova Senha</h2>
         </ChangePasswordHeaderWrapper>
    );
};

export default ChangePasswordHeader;