import styled from "styled-components";

export const ChangePasswordHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 2rem;
    margin-bottom: 0.625rem;
  }

  h2 {
    font-family: Inter;
    font-size: 20px;
    font-weight: 800;
    line-height: 24px;
    color: #ed6d25;
    margin-bottom: 2.25rem;
    cursor: default;
  }

  @media (min-width: 1024px) {
    img {
      margin-bottom: 1.125rem;
    }

    h2 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 2.375rem;
    }
  }
`;
