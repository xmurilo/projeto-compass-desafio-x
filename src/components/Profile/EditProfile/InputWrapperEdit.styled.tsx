import styled from "styled-components";
const InputWrapperEdit = styled.div`
  display: flex;
  column-gap: 6.625rem;
  margin: 5.75rem auto auto auto;

  & .column_1 {
    display: flex;
    flex-direction: column;
  }

  .input_edit_profession {
    margin-bottom: 1.19rem;
  }
  .input_birth_date_edit {
    margin-bottom: 1.19rem;
  }
  .input_country_edit {
    margin-bottom: 1.19rem;
  }
  .input_city_edit {
    margin-bottom: 1.19rem;
  }
  .input_name_edit {
    margin-bottom: 1.19rem;
  }
  .input_password_edit {
    margin-bottom: 1.19rem;
  }
  .input_repeat_password_edit {
    margin-bottom: 1.19rem;
  }

  @media (min-width: 320px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    .input_edit_profession,
    .input_birth_date_edit,
    .input_country_edit,
    .input_city_edit,
    .input_name_edit,
    .input_password_edit,
    .input_repeat_password_edit {
      width: 13.438rem;
      height: 3.188rem;
    }
    .input_country_edit,
    .input_birth_date_edit {
      width: 7.813rem;
    }
  }
`;

export default InputWrapperEdit;
