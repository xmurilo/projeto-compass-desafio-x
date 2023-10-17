import { FC } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Header/MainNavigation";
import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    column-gap: 2rem;
  }

`;

const RootLayout: FC = () => {
  return (
    <>
      <MainNavigation />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
};

export default RootLayout;
