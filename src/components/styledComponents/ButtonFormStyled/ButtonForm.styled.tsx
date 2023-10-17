import styled from "styled-components";
const ButtonForm = styled.button`
  display: block;
  width: 17.563rem;
  height: 2.313rem;
  background-color: var(--color-primary);
  border-radius: 8px;
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  cursor: pointer;

  &.createAccountButton,
  &.loginCredentialsButton {
    background: #eff3f8;
    color: #ed6d25;
  }

  &.button_form_register {
    margin-bottom: 5.75rem;
  }

  &.button_form_edit {
    margin: 2.313rem auto 6.438rem auto;
  }

  @media (min-width: 360px) {
    width: 17.563rem;
  }
  @media (min-width: 1024px) {
    width: 21rem;
    height: 3.188rem;

    &.createAccountButton,
    &.loginCredentialsButton {
      font-size: 18px;
    }
  }
`;

export default ButtonForm;
