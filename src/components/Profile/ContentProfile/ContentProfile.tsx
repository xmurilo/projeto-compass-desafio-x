import styled from "styled-components";

const ContentProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: 16px;
  max-height: 947px;

  @media (min-width: 480px) {
    width: 24rem;
  }

  @media (min-width: 768px) {
    width: 30rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 2.7rem;
  }

  @media (min-width: 1280px) {
    margin-bottom: 2.7rem;
  }

  @media (min-width: 1920px) {
    width: 37rem;
    max-height: 854px;
  }
`;

export default ContentProfileContainer;