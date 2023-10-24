import styled from 'styled-components';
export  const ContainerUserProfile = styled.button`
  display: grid;
  background-color: transparent;
  border: none;
  grid-template-areas: 'friends' 'content' 'comunity';
  gap: 2.5rem;

  .content {
    grid-area: content;
  }

  .friends {
    grid-area: friends;
  }

  .comunity {
    grid-area: comunity;
  }

  @media (min-width: 1024px) {
    grid-template-areas: 'content friends' 'content comunity';
    margin-top: 3.5rem;
    gap: 2rem;

    .content {
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
  }
`;