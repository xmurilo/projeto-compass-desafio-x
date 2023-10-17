import { FC } from "react";
import styled from "styled-components";
import Friend from "./Friend";

const FriendsGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2.29rem;
  row-gap: 2.06rem;
  justify-content: center;
`;

const FriendsGrid: FC = () => {
  return (
    <FriendsGridContainer>
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
    </FriendsGridContainer>
  );
};
export default FriendsGrid;
