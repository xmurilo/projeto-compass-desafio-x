import ChangePasswordHeader from "./ChangePasswordHeader";
import ChangePasswordForm from "./ChangePasswordForm";
import { ChangePasswordHeaderFormWrapper } from "../styledComponents/ChangePasswordHeaderFormStyled.tsx/ChangePasswordHeaderFormWrapper.styled";

const ChangePasswordHeaderForm = () => {
    return (
        <div>
            <ChangePasswordHeaderFormWrapper>
                <ChangePasswordHeader/>
                <ChangePasswordForm/>
            </ChangePasswordHeaderFormWrapper>
        </div>
    )
}

export default ChangePasswordHeaderForm;