import React from 'react';
import styled from 'styled-components';
import { useApi } from '../../../context/apiContext';
import { splitBirthDate } from '../../../utils/splitBirthDate';
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
  const userData = useApi();
  const birthDate = splitBirthDate(userData?.birthDate?.toString());
  const year = birthDate.split(' ')[4];
  const age = new Date().getFullYear() - Number(year);

  return (
    <DataContentContainer>
      <p>
        <span>Relacionamento:</span>
        {userData.relationship}
      </p>
      <p>
        <span>Aniverário:</span>
        {birthDate}
      </p>
      <p>
        <span>Idade:</span>
        {age}
      </p>
      <p>
        <span>Quem sou eu:</span>
        {userData.profession}
      </p>
      <p>
        <span>Moro:</span>Guarantã
      </p>
      <p>
        <span>País:</span>
        {userData.country}
      </p>
      <p>
        <span>Cidade:</span>
        {userData.city}
      </p>
    </DataContentContainer>
  );
};

export default DataContent;
