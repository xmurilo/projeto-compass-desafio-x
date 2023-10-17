import React from "react";
import styled from "styled-components";

const ContentUIContainer = styled.div`
  border-radius: 16px;
  background-color: var(--color-box);
  margin-bottom: 2.5rem;
`;

type ContentUIProps = {
  children: React.ReactNode;
  className?: string;
};

const ContentUI: React.FC<ContentUIProps> = ({ children }) => {
  return <ContentUIContainer>{children}</ContentUIContainer>;
};

export default ContentUI;
