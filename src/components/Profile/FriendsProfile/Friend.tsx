import { FC } from "react";
import styled from "styled-components";

const FriendContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }

  p {
    font-size: 0.875rem;
  }
`;

const Friend: FC = () => {
  return (
    <FriendContainer>
      <img
        src="https://w7.pngwing.com/pngs/900/441/png-transparent-avatar-face-man-boy-male-profile-smiley-avatar-icon.png"
        alt=""
      />
      <p>Fernando</p>
    </FriendContainer>
  );
};

export default Friend;
