import { FC } from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  display: none;
  justify-content: center;
  align-items: center;
  height: 3rem;
  background-color: #fdfeff;
  position: absolute;
  left: 0%;
  bottom: 0%;
  width: 100%;
  p {
    color: var(--color-primary);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  @media (min-width: 1024px){
    display: flex;
  }
`;
const Footer: FC = () => {
  return (
    <FooterStyled>
      <p>Todos os direitos reservados</p>
    </FooterStyled>
  );
};

export default Footer;
