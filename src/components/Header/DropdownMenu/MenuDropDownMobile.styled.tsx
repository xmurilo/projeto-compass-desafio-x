import styled from 'styled-components';
import arrow from '../../../assets/icons/dropdownIcon.svg';
export const MenuDropdownMobile = styled.nav`
  position: relative;

  & label {
    width: 2.5rem;
    height: 2.5rem;
    display: block;
    position: absolute;
    bottom: -25px;
    right: 5px;
    cursor: pointer;
  }

  & #menu_dropdown {
    display: none;
  }

  & label .menu {
    width: 100%;
    height: 100%;
    position: relative;
    bottom: 25%;
    left: 70%;
    display: block;
  }
  & label .menu .dropdown {
    display: block;
    width: 1.5rem;
    height: 1.563rem;
    background-image: url(${arrow});
    position: absolute;
    top: 35%;
    left: 30%;
    transition: 0.2s ease-in-out;
  }

  & input:checked ~ label .dropdown {
    transform: rotate(180deg);
  }

  & input:checked ~ .list_menu {
    width: 8.438rem;
    height: 13rem;
    background: #fff;
    border-radius: 0px 0px 6px 6px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    left: -115px;
    top: 30px;
    z-index: 1;
  }

  & .list_menu {
    display: none;
  }

  & .line_option {
    display: block;
    width: 7.125rem;
    height: 0.063rem;
    border: 1px solid #ed6d25;
    margin: 0.5rem 0.75rem 0.225rem 0.563rem;
  }

  & .list_menu li:first-child {
    margin-top: 1.2rem;
  }
  & .list_menu .link {
    color: #8d8d8d;
    margin-left: 0.625rem;
    transition: 0.3s ease-in-out;
  }
  & .link:hover {
    color: var(--color-primary);
    transition: 0.3s;
  }

  & .button_logout {
    width: 6.25rem;
    height: 1.875rem;
    background-color: var(--color-primary);
    color: #fff;
    border: none;
    border-radius: 6px;
    margin: 10px auto auto auto;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  & .button_logout:hover {
    background-color: #000000;
    transition: 0.3s;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;
