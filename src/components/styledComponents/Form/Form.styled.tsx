import styled from "styled-components";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.form_register {
    margin-top: 1.063rem;
    padding: 0.571rem 0.875rem 0.625rem 1.313rem;
  }

  &.form_edit {
    margin-top: 1.063rem;
    padding: 0.571rem 0.875rem 0.625rem 1.313rem;
  }

  &.form_edit .title_edit_profile {
    color: var(--color-primary);
    font-size: 1.6rem;
    font-weight: var(--fw-semibold);
    letter-spacing: 0.1875rem;
    margin: auto;
  }

  &.form_register .container_logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  & .title_register {
    color: var(--color-primary);
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }

  .rememberedPassword {
    font-family: Roboto Flex;
    font-size: 16px;
    font-weight: 400;
    line-height: 16.41px;
    letter-spacing: 0px;
    text-align: left;
    color: #ed6d25;
    cursor: default;
  }

  .cPRememberedPassword {
    font-family: Roboto Flex;
    font-size: 16px;
    font-weight: 400;
    line-height: 16.41px;
    letter-spacing: 0px;
    text-align: left;
    color: #ed6d25;
    cursor: default;
    margin-bottom: 0.938rem;
  }

  @media (min-width: 1024px) {
    &.form_register {
      width: 24rem;
      height: 37.375rem;
    }

    &.form_edit {
      width: 37rem;
    }

    .rememberedPassword {
      font-size: 18px;
    }

    .sendCodeButton {
      font-size: 18px;
    }
  }
`;

export default Form;
