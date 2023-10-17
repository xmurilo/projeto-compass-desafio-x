import { FC } from "react";
import styled from "styled-components";

const ComunityContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 0.75rem;
    object-fit: cover;
  }

  p {
    font-size: 0.875rem;
  }
`;

const Comunity: FC = () => {
  return (
    <ComunityContainer>
      <img
        src="https://w7.pngwing.com/pngs/900/441/png-transparent-avatar-face-man-boy-male-profile-smiley-avatar-icon.png"
        alt=""
      />
      <p>Carros</p>
    </ComunityContainer>
  );
};

export default Comunity;
