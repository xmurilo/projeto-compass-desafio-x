import { FC } from "react";
import HeaderProfile from "../components/Profile/HeaderProfile/HeaderProfile";

import SearchBar from "../components/Header/SearchBar";

import FriendsProfileContainer from "../components/Profile/FriendsProfile/FriendsProfile";
import FriendsNavbar from "../components/Profile/FriendsProfile/FriendsNavbar";
import FriendsGrid from "../components/Profile/FriendsProfile/FriendsGrid";

import ContentProfileContainer from "../components/Profile/ContentProfile/ContentProfile";
import TopContent from "../components/Profile/ContentProfile/TopContent";
import BottomContent from "../components/Profile/ContentProfile/BottomContent";

import ComunityProfileContainer from "../components/Profile/ComunityProfile/ComunityProfile";
import ComunityNavbar from "../components/Profile/ComunityProfile/ComunityNavBar";
import ComunityGrid from "../components/Profile/ComunityProfile/ComunityGrid";

import styled from "styled-components";
const MainContainer = styled.button`
  display: grid;
  background-color: transparent;
  border: none;
  grid-template-areas: "friends" "content" "comunity";
  gap: 2.5rem;

  .content {
    grid-area: content;
  }

  .friends {
    grid-area: friends;
  }

  .comunity {
    grid-area: comunity;
  }

  @media (min-width: 1024px) {
    grid-template-areas: "content friends" "content comunity";
    margin-top: 3.5rem;
    gap: 2rem;

    .content {
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
  }
`;

const UserProfile: FC = () => {
  return (
    <>
      <SearchBar isHeader={false} />
      <HeaderProfile />
      <MainContainer>
        <ContentProfileContainer className="content">
          <TopContent />
          <BottomContent />
        </ContentProfileContainer>

        <FriendsProfileContainer className="friends">
          <FriendsNavbar />
          <FriendsGrid />
        </FriendsProfileContainer>

        <ComunityProfileContainer className="comunity">
          <ComunityNavbar />
          <ComunityGrid />
        </ComunityProfileContainer>
      </MainContainer>
    </>
  );
};

export default UserProfile;
