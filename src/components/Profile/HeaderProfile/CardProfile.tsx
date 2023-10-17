import React from "react";
import styled from "styled-components";
import ContentUI from "../../UI/Content/ContentUI";

const CardProfileContainer = styled.div`
  height: 16.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 7.125rem;
    height: 7.125rem;
    border-radius: 50%;
    border: 2px solid var(--color-primary);
    margin-bottom: 1.56rem;
  }

  .name {
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  .currStatus {
    font-size: 1.125rem;
    line-height: 1.5;
  }
`;

const CardProfile: React.FC = () => {
  return (
    <ContentUI>
      <CardProfileContainer>
        <img
          src="https://w7.pngwing.com/pngs/900/441/png-transparent-avatar-face-man-boy-male-profile-smiley-avatar-icon.png"
          alt=""
        />
        <p className="name">Gabriel Barbosa</p>
        <p className="currStatus">Solteiro, Brasil</p>
      </CardProfileContainer>
    </ContentUI>
  );
};

export default CardProfile;
