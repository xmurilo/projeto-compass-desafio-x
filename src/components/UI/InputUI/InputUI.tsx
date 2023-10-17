import React from "react";
import styled from "styled-components";

const InputUIContainer = styled.div`
  border-radius: 8px;
  background-color: var(--color-input);
`;

type InputUIProps = {
  children: React.ReactNode;
};

const InputUI: React.FC<InputUIProps> = ({ children }) => {
  return <InputUIContainer>{children}</InputUIContainer>;
};

export default InputUI;
