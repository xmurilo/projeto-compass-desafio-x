import styled from "styled-components";

const CustomInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  input {
    width: 17.563rem;
    height: 2.313rem;
    padding-left: 1rem;
    background: #eff3f8;
    background: var(--color-input);
    border-radius: 8px;
    border: none;
    color: #868686;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  input:focus {
    outline: none;
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
  }

  .invalid {
    border: 1px solid #ff0000;
    background: #ff00001a;
  }
  .errorText {
    color: #ff0000;
    font-size: 0.7rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .sendCodeInput,
  & .passwordInput,
  & .rePasswordInput {
    margin-bottom: 1.125rem;
  }

  & .changePasswordSaveButton {
    margin-bottom: 3.375rem;
  }

  .registeredEmailInput {
    margin-bottom: 2.375rem;
  }

  @media (min-width: 1024px) {
    .registeredEmailInput {
      width: 21rem;
      height: 3.188rem;
    }

    input {
      width: 21rem;
      height: 3.188rem;
    }
  }
`;

export default CustomInputWrapper;
