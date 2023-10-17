import React from "react";
import styled from "styled-components";
import EditProfileButton from "./EditProfileButton";
import CardProfile from "./CardProfile";
const HeaderProfileContainer = styled.div`
  width: 20rem;
  margin-top: 3.5rem;

  @media (min-width: 480px) {
    width: 24rem;
  }

  @media (min-width: 768px) {
    width: 30rem;
  }

  @media (min-width: 1024px) {
    width: 12rem;
  }

  @media (min-width: 1920px) {
    width: 17.5rem;
  }
`;

const HeaderProfile: React.FC = () => {
  return (
    <HeaderProfileContainer>
      <CardProfile />
      <EditProfileButton />
    </HeaderProfileContainer>
  );
};

export default HeaderProfile;
