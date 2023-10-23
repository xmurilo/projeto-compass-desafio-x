import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderContainer, LinksContainer, LogoContainer, NavBarContainer } from './styles';
import SearchBar from './SearchBar';
import ProfileMenu from './ProfileMenu';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

const MainNavigation: FC = () => {
  const { pathname } = useLocation();
  const logout = (): void => {
    Cookies.remove('uid');
    Cookies.remove('accessToken');
  };

  if (pathname === '/user' || pathname === '/edit') {
    return (
      <HeaderContainer>
        <NavBarContainer>
          <LogoContainer>UOLkut</LogoContainer>
          <LinksContainer>
            <li>
              <NavLink to='/'>Início</NavLink>
            </li>
            <li>
              <NavLink to='user'>Perfil</NavLink>
            </li>
            <li>
              <NavLink to=''>Comunidades</NavLink>
            </li>
            <li>
              <NavLink to=''>Jogos</NavLink>
            </li>
            <li>
              <NavLink onClick={logout} to='/'>
                Logout
              </NavLink>
            </li>
          </LinksContainer>
          {pathname === '/user' && <SearchBar isHeader={true} />}
          <ProfileMenu />
        </NavBarContainer>
      </HeaderContainer>
    );
  }

  return (
    <HeaderContainer>
      <NavBarContainer>
        <LogoContainer>UOLkut</LogoContainer>
        <p>Centro de Segurança</p>
      </NavBarContainer>
    </HeaderContainer>
  );
};

export default MainNavigation;
