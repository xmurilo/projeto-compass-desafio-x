import styled from "styled-components";
const Container = styled.div`
  display: flex;

  @media (min-width: 320px) {
    &.container_edit_profile {
      flex-direction: column;
      gap: 2.125rem;
    }
  }

  margin-top: 1.063rem;
  @media (min-width: 768px) {
    column-gap: 2rem;
    align-items: center;
  }

  @media (min-width: 1024px) {
    &.container_edit_profile {
      align-items: flex-start;
      flex-direction: row;
      gap: 2.125rem;
    }

    justify-content: center;
    column-gap: 2rem;
    .container_panel {
      display: flex;
    }
  }

  @media (min-width: 1024px) {
    margin-top: 1.313rem;
  }

  @media (min-width: 1920px) {
    margin-top: 9.313rem;

    &.container_edit_profile {
      margin-top: 5.5rem;
    }
  }
`;

export default Container;
