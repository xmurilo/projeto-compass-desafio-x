import { FC, useEffect } from 'react';
import HeaderProfile from '../components/Profile/HeaderProfile/HeaderProfile';

import SearchBar from '../components/Header/SearchBar';

import FriendsProfileContainer from '../components/Profile/FriendsProfile/FriendsProfile';
import FriendsNavbar from '../components/Profile/FriendsProfile/FriendsNavbar';
import FriendsGrid from '../components/Profile/FriendsProfile/FriendsGrid';

import ContentProfileContainer from '../components/Profile/ContentProfile/ContentProfile';
import TopContent from '../components/Profile/ContentProfile/TopContent';
import BottomContent from '../components/Profile/ContentProfile/BottomContent';

import ComunityProfileContainer from '../components/Profile/ComunityProfile/ComunityProfile';
import ComunityNavbar from '../components/Profile/ComunityProfile/ComunityNavBar';
import ComunityGrid from '../components/Profile/ComunityProfile/ComunityGrid';

import { ContainerUserProfile } from '../components/styledComponents/ProfilePageStyled/ContainerUserProfile.styled';

const UserProfile: FC = () => {

  return (
    <>
      <SearchBar isHeader={false} />
      <HeaderProfile />
      <ContainerUserProfile>
        <ContentProfileContainer className='content'>
          <TopContent />
          <BottomContent />
        </ContentProfileContainer>

        <FriendsProfileContainer className='friends'>
          <FriendsNavbar />
          <FriendsGrid />
        </FriendsProfileContainer>

        <ComunityProfileContainer className='comunity'>
          <ComunityNavbar />
          <ComunityGrid />
        </ComunityProfileContainer>
      </ContainerUserProfile>
    </>
  );
};

export default UserProfile;
