import React, { FC } from "react";

interface NavLinksProps {
  to: string;
  children: React.ReactNode;
}

const StyledNavLink: FC<NavLinksProps> = ({ to, children }) => {
  return <a></a>;
};

export default StyledNavLink;
