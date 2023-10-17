import styled from 'styled-components';
import Arrow from '../../../assets/icons/dropdownIcon.svg';
const Select = styled.div`
  align-self: flex-end;
  width: 8.563rem;
  height: 2.188rem;
  padding: 0.563rem 1.625rem 0.625rem 0.438rem;
  color: var(--color-placeholder);
  background-color: #eff3f8;
  background-image: url(${Arrow});
  background-repeat: no-repeat;
  background-position: 95% center;
  background-size: 1.313rem 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 8px;
  border: none;
  outline: none;
  appearance: none;
  position: relative;
  cursor: pointer;

  &.select_register {
    margin-top: 1.188rem;
  }

  & .container_options {
    width: 8.438rem;
    height: 9.25rem;
    border-radius: 0px 0px 6px 6px;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 100%;
    left: 0;
  }

  & .container_options li {
    margin-left: 0.563rem;
    color: #8d8d8d;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }
  & .container_options li:hover {
    color: var(--color-primary);
    transition: 0.3s;
  }

  & .container_options li:first-child {
    margin-top: 1rem;
  }
  & .container_options .line_option {
    display: block;
    margin: 0.5rem 0.75rem 0.125rem 0.563rem;
    width: 7.125rem;
    height: 0.063rem;
    border: 1px solid #ed6d25;
  }

  @media (min-width: 320px) {
    &.select_register {
      width: 8.563rem;
      margin-right: 4px;
      background-size: 1.25rem 1.25rem;
      font-size: 0.8rem;
    }
    &.select_edit {
      width: 100%;
      margin-bottom: 1.25rem;
      align-self: flex-start;
    }
  }
  @media (min-width: 360px) {
    &.select_register {
      margin-right: 0;
      background-size: 1.313rem 1.25rem;
      font-size: 0.875rem;
    }
  }

  @media (min-width: 1024px) {
    &.select_register {
      width: 10.438rem;
      font-size: 1rem;
    }
    &.select_edit {
      width: 11.313rem;
    }
  }

  @media (min-width: 1920px) {
    &.select_register {
      width: 10.438rem;
      margin-left: 9.608rem;
    }
  }
`;

export default Select;
