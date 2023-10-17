import React from "react";
import styled from "styled-components";
import ContentUI from "../../UI/Content/ContentUI";
import { useNavigate } from "react-router-dom";
const EditProfileBtnContainer = styled.div`
  font-size: 1.125rem;
  font-weight: var(--fw-medium);
  height: 3.125rem;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  cursor: pointer;
`;

const EditProfileButton: React.FC = () => {
  const router = useNavigate();
  return (
    <ContentUI>
      <EditProfileBtnContainer onClick={() => router("/edit")}>
        <p>Editar meu perfil</p>
      </EditProfileBtnContainer>
    </ContentUI>
  );
};

export default EditProfileButton;
