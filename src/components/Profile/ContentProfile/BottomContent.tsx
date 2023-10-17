import React from "react";
import styled from "styled-components";

const BottomContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.38rem;
  justify-content: flex-start;

  & > div {
    display: flex;
    align-items: center;
  }

  & > div > h4 {
    font-weight: var(--ff-regular);
    color: var(--color-gray);
    margin-right: 0.75rem;
  }

  & > div > p:first-of-type {
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 0.125rem 1rem;
    border-radius: 1.875rem;
    border: 1px solid #ed6d25;
    margin-right: 1.06rem;
  }

  & > div > p:last-of-type {
    color: var(--color-primary);
    font-size: 0.875rem;
    font-weight: var(--fw-medium);
  }
`;

const BottomContent: React.FC = () => {
  return (
    <BottomContentContainer>
      <div>
        <h4>Músicas:</h4>
        <p>Trap</p>
        <p>Ver todos</p>
      </div>
      <div>
        <h4>Filmes:</h4>
        <p>A rede social</p>
        <p>Ver todos</p>
      </div>
    </BottomContentContainer>
  );
};

export default BottomContent;
