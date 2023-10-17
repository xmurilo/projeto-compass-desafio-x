import { FC, Fragment } from 'react';
import PanelImg from '../../../assets/icons/panel.svg';
import styled from 'styled-components';

const PanelContainer = styled.div`
  height: 37.563rem;
  display: none; 
  align-items: end;
  width: 50rem;
  height: 37.375rem;
  background-image: url(${PanelImg});
  background-size: cover;
  border-radius: 1rem;

  & p {
    color: #fff;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 38.563rem;
    margin: 0 0 2rem 2rem;
  }

  @media (min-width: 1024px) {
    width: 28rem;
    /* margin-top: 2rem; */
    background-position: 100%;
    display: flex;
  }
  @media (min-width: 1440px) {
    width: 50rem;
  }
  @media (min-width: 1920px) {
    /* margin-top: 9.313rem; */
  }
`;

const Panel: FC = () => {
  return (
    <Fragment>
      <PanelContainer>
        <p>Conecta-se aos seus amigos e familiares usando recados e mensagens instantâneas</p>
      </PanelContainer>
    </Fragment>
  );
};

export default Panel;
