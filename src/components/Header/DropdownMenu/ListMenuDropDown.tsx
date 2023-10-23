import { NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ListMenuDropdown: React.FC = () => {
  const router = useNavigate();
  const logout = (): void => {
    Cookies.remove('accessToken');
    Cookies.remove('uid');
    router('/');
  };

  return (
    <>
      <input type='checkbox' id='menu_dropdown' />
      <label htmlFor='menu_dropdown'>
        <menu className='menu'>
          <i className='dropdown'></i>
        </menu>
      </label>
      <ul className='list_menu'>
        <li>
          <NavLink className='link' to='/'>
            Início
          </NavLink>
        </li>
        <span className='line_option'></span>
        <li>
          <NavLink className='link' to='/user'>
            Perfil
          </NavLink>
        </li>
        <span className='line_option'></span>
        <li>
          <NavLink className='link' to='/'>
            Comunidades
          </NavLink>
        </li>
        <span className='line_option'></span>
        <li>
          <NavLink className='link' to='/'>
            Jogos
          </NavLink>
        </li>
        <span className='line_option'></span>
        <button className='button_logout' onClick={logout}>
          Sair
        </button>
      </ul>
    </>
  );
};

export default ListMenuDropdown;
