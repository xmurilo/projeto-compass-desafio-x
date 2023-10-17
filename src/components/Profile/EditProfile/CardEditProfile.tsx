import React from "react";
import styled from "styled-components";
import ContentUI from "../../UI/Content/ContentUI";
import pencil from "../../../assets/icons/pencil.svg";
const CardProfileContainer = styled.div`
  width: 17.5rem;
  height: 20.313rem;
  margin: auto;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .avatar_profile_container {
    width: 11.5rem;
    height: 11.5rem;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid var(--color-primary);
  }

  .pencil_container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.688rem;
    height: 2.688rem;
    position: absolute;
    bottom: 27%;
    left: 17%;
    background-color: #fdfeff;
    border-radius: 50%;
    border: 3px solid var(--color-primary);
    cursor: pointer;
  }
`;

const CardProfileEditProfile: React.FC = () => {
  return (
    <ContentUI>
      <CardProfileContainer>
        <div className="avatar_profile_container">
          <img
            src="https://w7.pngwing.com/pngs/900/441/png-transparent-avatar-face-man-boy-male-profile-smiley-avatar-icon.png"
            alt=""
          />
        </div>
        <div className="pencil_container">
          <img src={pencil} alt="Pencil" />
        </div>
      </CardProfileContainer>
    </ContentUI>
  );
};

export default CardProfileEditProfile;
