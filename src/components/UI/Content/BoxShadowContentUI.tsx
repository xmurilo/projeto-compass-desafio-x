import styled from "styled-components";

const ContentUIBoxShadow = styled.div`
  border-radius: 16px;
  background-color: var(--color-box);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (min-width: 1024px) {
    width: 24rem;
    height: 37.375rem;
  }

  &.container_edit {
    width: auto;
    height: auto;
  }

  @media (min-width: 360px) {
    width: 20rem;
    height: 36.375rem;
  }
  @media (min-width: 1024px) {
    width: 24rem;
    height: 37.375rem;
  }
`;

export default ContentUIBoxShadow;
