import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  height: 3.75rem;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 1.25rem;

  @media (min-width: 480px) {
    padding: 0 3rem;
  }
  @media (min-width: 768px) {
    padding: 0 8rem;
  }

  @media (min-width: 1024px) {
    padding: 0 8rem;
  }

  @media (min-width: 1280px) {
    padding: 0 10rem;
  }

  @media (min-width: 1920px) {
    padding: 0 22rem;
  }
`;

export const NavBarContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    display: none;
  }

  @media (min-width: 768px) {
    justify-content: space-between;

    p {
      display: block;
    }
  }

  @media (min-width: 1024px) {
  }
`;

export const LogoContainer = styled.span`
  color: var(--color-primary);

  font-weight: var(--fw-extrabold);
  font-size: 1.25rem;

  @media (min-width: 1024px) {
    font-size: 1.7rem;
    margin-right: 1rem;
  }

  @media (min-width: 1280px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1440px) {
    font-size: 1.9rem;
    margin-right: 1.94rem;
  }

  @media (min-width: 1920px) {
    font-size: 2.25rem;
  }
`;

export const LinksContainer = styled.ul`
  display: none;
  align-items: center;
  margin-right: 1rem;

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    display: flex;
    font-size: 0.7rem;
    gap: 1rem;
    margin-right: 2.5rem;
    font-size: 0.8rem;
  }

  @media (min-width: 1280px) {
    font-size: 1rem;
    gap: 1.5rem;
    margin-right: 5rem;
  }

  @media (min-width: 1920px) {
    font-size: 1.125rem;
    gap: 2.31rem;
    margin-right: 8.88rem;
  }
`;

export const NavbarLink = styled(NavLink)<{ isActive: boolean }>`
  ${({ isActive }) =>
    isActive &&
    css`
      color: var(--color-primary);
      font-weight: var(--fw-thin);
    `}
`;

export const SearchBarContainer = styled.form<{ isHeader: boolean }>`
  ${(props) =>
    props.isHeader
      ? css`
          display: none;

          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            position: relative;

            & > input {
              font-family: var(--ff-search);
              font-size: 0.55rem;
              margin-right: 0.88rem;
              padding-left: 2rem;
              width: 9rem;
              height: 2rem;
              border-radius: 8px;
              border: none;
              background-color: var(--color-input);
            }

            & > img {
              position: absolute;
              width: 1.35213rem;
              height: 1.3rem;
              left: 0.4rem;
            }
          }

          @media (min-width: 1024px) {
            & > input {
              font-size: 0.8rem;
              width: 14rem;
            }
          }

          @media (min-width: 1280px) {
            & > input {
              font-size: 1rem;
              width: 17rem;
              height: 2.74744rem;
            }
          }

          @media (min-width: 1920px) {
            & > input {
              width: 22.1875rem;
              height: 2.74744rem;
              padding-left: 3.19rem;
            }

            & > img {
              position: absolute;
              width: 1.5rem;
              height: 1.5rem;
              left: 0.94rem;
            }
          }
        `
      : css`
          display: flex;
          align-items: center;
          position: relative;
          margin: 1.5rem 0 0;

          & > input {
            font-family: var(--ff-search);
            padding-left: 2.88rem;
            width: 20rem;
            height: 2.75rem;
            border-radius: 8px;
            border: none;
            background-color: var(--color-box);
          }

          & > img {
            position: absolute;
            width: 1.35213rem;
            height: 1.3rem;
            left: 0.85rem;
          }

          @media (min-width: 480px) {
            & > input {
              width: 24rem;
            }
          }

          @media (min-width: 768px) {
            display: none;
          }
        `}
`;
