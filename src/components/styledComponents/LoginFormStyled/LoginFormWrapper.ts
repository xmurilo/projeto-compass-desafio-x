import styled from "styled-components";

type LoginFormWrapperProps = {
  isError?: boolean;
};

export const LoginFormWrapper = styled.div<LoginFormWrapperProps>`
  .input_email_password {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.938rem;
  }

  .input_email_password:first-child {
    margin-bottom: 1.188rem;
  }

  .input_email_password input {
    width: 17.563rem;
    height: 2.313rem;
    border-radius: 8px;
    background-color: #eff3f8;
    padding-left: 16px;
    border: ${(props) => (props.isError ? "1px solid red" : "none")};
    outline: 0;
    font-family: Roboto Flex;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: #868686;
  }
  .input_checkbox {
    display: flex;
  }

  .input_checkbox input {
    all: unset;
    width: 0.875rem;
    height: 0.938rem;
    display: inline-block;
    border-radius: 4px;
    box-shadow: inset 0 0 0 2px #ed6d25;
    margin-bottom: 2.563rem;
    cursor: pointer;
  }

  .input_checkbox input[type="checkbox"]:checked {
    background-color: #ed6d25;
  }
  .input_checkbox label {
    font-family: Roboto Flex;
    font-size: 13px;
    font-weight: 400;
    color: #868686;
    padding-left: 10px;
  }

  .buttons {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .forgotPassword {
    font-family: Roboto Flex;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.41px;
    letter-spacing: 0px;
    text-align: left;
    text-decoration: underline;
    color: #ed6d25;
  }

  @media (min-width: 480px) {
    .input_email_password input {
      width: 18.051rem;
      height: 2.438rem;
      font-size: 16px;
    }

    .input_checkbox label {
      font-size: 15px;
    }
  }

  @media (min-width: 768px) {
    .input_email_password input {
      width: 18.539rem;
      height: 2.563rem;
    }

    .input_checkbox input {
      width: 1rem;
      height: 1.063rem;
    }
  }

  @media (min-width: 1024px) {
    .input_email_password input {
      width: 19.027rem;
      height: 2.688rem;
    }

    .input_checkbox label {
      font-size: 16px;
    }

    .input_checkbox input {
      margin-bottom: 2.688rem;
    }

    .input_email_password {
      margin-bottom: 1.563rem;
    }
  }

  @media (min-width: 1280px) {
    .input_email_password input {
      width: 19.515rem;
      height: 2.813rem;
    }
  }

  @media (min-width: 1440px) {
    .input_email_password input {
      width: 20.003rem;
      height: 2.938rem;
    }
  }

  @media (min-width: 1920px) {
    .input_email_password input {
      width: 21rem;
      height: 3.188rem;
    }
  }
`;
