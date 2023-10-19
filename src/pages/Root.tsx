import { FC } from 'react';
import MainNavigation from '../components/Header/MainNavigation';
import styled from 'styled-components';

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

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <MainContainer>{children}</MainContainer>
    </>
  );
};

export default RootLayout;
