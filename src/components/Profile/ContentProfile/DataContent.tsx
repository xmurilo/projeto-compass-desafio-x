import React from "react";
import styled from "styled-components";

const DataContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;

  & span {
    color: var(--color-gray);
    margin-right: 0.5rem;
  }
`;

const DataContent: React.FC = () => {
  return (
    <DataContentContainer>
      <p>
        <span>Relacionamento:</span>Solteiro
      </p>
      <p>
        <span>Aniverário:</span>21 de julho
      </p>
      <p>
        <span>Idade:</span>22
      </p>
      <p>
        <span>Quem sou eu:</span>Programador
      </p>
      <p>
        <span>Moro:</span>Guarantã
      </p>
      <p>
        <span>País:</span>Brasil
      </p>
      <p>
        <span>Cidade:</span>São Paulo
      </p>
    </DataContentContainer>
  );
};

export default DataContent;
