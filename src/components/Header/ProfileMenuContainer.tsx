import styled from 'styled-components';

export const ProfileMenuContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 12.81rem;

  .photo {
    width: 2rem;
    height: 2rem;

    margin-right: 0.81rem;
    margin-right: 0.31rem;
    border-radius: 50%;
  }

  span {
    display: none;
    margin-right: 0.25rem;
  }
  .dropdown {
    display: none;
    width: 1rem;
    height: 1rem;
  }

  @media (min-width: 480px) {
    margin-left: 15.81rem;
  }

  @media (min-width: 768px) {
    margin-left: 0;
    .photo {
      width: 2rem;
      height: 2rem;
    }
  }

  @media (min-width: 1024px) {
    .dropdown {
      display: block;
    }
    .photo {
      width: 2.5rem;
      height: 2.5rem;
    }
    span {
      display: flex;
      font-size: 0.8rem;
    }
  }

  @media (min-width: 1280px) {
    span {
      font-size: 1rem;
    }
  }
`;
