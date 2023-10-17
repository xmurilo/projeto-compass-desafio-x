import { FC } from "react";
import styled from "styled-components";

const FriendsNavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h4 {
    font-size: 1rem;
    font-weight: var(--fw-medium);
    line-height: 1.5;
  }

  p {
    color: var(--color-primary);
    font-size: 0.875rem;
    font-weight: var(--fw-medium);
  }
`;

const FriendsNavbar: FC = () => {
  return (
    <FriendsNavbarContainer>
      <h4>Amigos (248)</h4>
      <p>Ver todos</p>
    </FriendsNavbarContainer>
  );
};

export default FriendsNavbar;
