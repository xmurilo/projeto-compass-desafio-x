import styled from "styled-components";
const InputRegisterWrraper = styled.div`
  .column_1,
  .column_2 {
    display: flex;
  }
  .column_1 {
    margin-top: 1rem;
    column-gap: 1.188rem;
  }
  .column_2 {
    margin-top: 1.438rem;
    column-gap: 0.938rem;
  }

  @media (min-width: 320px) {
    .input_register_name,
    .input_register_email,
    .input_register_password {
      width: 100%;
    }

    .input_register_email {
      margin: 2.188rem 0 1.188rem 0;
    }

    .input_register_password {
      margin: 0.5rem 0 1.125rem 0;
    }

    .column_1 .input_register_profession,
    .column_2 .input_register_city {
      width: 8.563rem;
    }

    .column_1 .input_register_birth_date,
    .column_2 .input_register_country {
      width: 7.813rem;
    }
  }

  @media (min-width: 360px) {
    .column_1 .input_register_birth_date,
    .column_2 .input_register_country,
    .column_1 .input_register_profession,
    .column_2 .input_register_city {
      width: 100%;
      height: 2.313rem;
    }
  }

  @media (min-width: 1024px) {
    .input_register_name,
    .input_register_email,
    .input_register_password,
    .column_1 .input_register_birth_date,
    .column_2 .input_register_country,
    .column_1 .input_register_profession,
    .column_2 .input_register_city {
      height: 3.188rem;
    }
    .input_register_birth_date,
    .input_register_country {
      width: 5.813rem;
    }
  }
`;

export default InputRegisterWrraper;
