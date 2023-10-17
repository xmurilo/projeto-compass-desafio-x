import { FC } from "react";
import styled from "styled-components";
import Comunity from "./Comunity";

const ComunityGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2.29rem;
  row-gap: 2.06rem;
  justify-content: center;

`;

const ComunityGrid: FC = () => {
  return (
    <ComunityGridContainer>
      <Comunity />
      <Comunity />
      <Comunity />
      <Comunity />
      <Comunity />
      <Comunity />
      <Comunity />
      <Comunity />
      <Comunity />
    </ComunityGridContainer>
  );
};
export default ComunityGrid;
