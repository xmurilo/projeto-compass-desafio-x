import styled from "styled-components";

const ButtonFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .loginAccountButton {
    font-size: 14px;
    margin-bottom: 1.361rem;
  }

  .button_form_register {
    margin-top: 1.188rem;
    margin-bottom: 1.125rem;
  }

  .sendCodeButton {
    margin-bottom: 6.813rem;
  }

  .createAccountButton {
    font-size: 14px;
    margin-bottom: 4.826rem;
  }

  .rememberedPassword {
    margin-bottom: 0.938rem;
  }

  @media (min-width: 320px) {
    .button_form_register {
      margin: 1.188rem auto 1.125rem auto;
    }
  }

  @media (min-width: 480px) {
    .createAccountButton,
    .loginAccountButton {
      width: 18.051rem;
      height: 2.438rem;
    }

    .createAccountButton {
      margin-bottom: 4.6rem;
    }
    .rememberedPassword {
      margin-bottom: 0.938rem;
    }

    .forgotPassword {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    .createAccountButton,
    .loginAccountButton {
      width: 18.539rem;
      height: 2.563rem;
    }

    .input_checkbox input {
      width: 1rem;
      height: 1.063rem;
    }
  }

  @media (min-width: 1024px) {
    .button_form_register {
      margin-top: 2.188rem;
      margin-bottom: 1.875rem;
    }

    .createAccountButton {
      margin-bottom: 2rem;
      font-size: 18px;
    }

    .loginAccountButton {
      font-size: 18px;
    }
  }

  @media (min-width: 1280px) {
    .createAccountButton,
    .loginAccountButton {
      width: 19.515rem;
      height: 2.813rem;
    }
  }

  @media (min-width: 1440px) {
    .createAccountButton,
    .loginAccountButton {
      width: 20.003rem;
      height: 2.938rem;
    }
  }

  @media (min-width: 1920px) {
    .createAccountButton,
    .loginAccountButton {
      width: 21rem;
      height: 3.188rem;
    }
  }
`;

export default ButtonFormWrapper;
