import React from 'react';
import { useApi } from '../../context/apiContext';
import arrow from '../../assets/icons/dropdownIcon.svg';
import { MenuDropdownMobile } from './DropdownMenu/MenuDropDownMobile';
import ListMenuDropdown from './DropdownMenu/ListMenuDropDown';
import { ProfileMenuContainer } from './ProfileMenuContainer';
const ProfileMenu: React.FC = () => {
  const userData = useApi();

  return (
    <ProfileMenuContainer>
      <img
        className='photo'
        src='https://w7.pngwing.com/pngs/900/441/png-transparent-avatar-face-man-boy-male-profile-smiley-avatar-icon.png'
        alt=''
      />
      <span>{userData.name}</span>
      <img className='dropdown' src={arrow} alt='arrow' />
      <MenuDropdownMobile>
        <ListMenuDropdown />
      </MenuDropdownMobile>
    </ProfileMenuContainer>
  );
};

export default ProfileMenu;
