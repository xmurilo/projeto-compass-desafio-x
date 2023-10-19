import React from 'react';
import RootLayout from './pages/Root';
import UserProfile from './pages/UserProfile';
import GlobalStyle from './styles/globalStyles';
import LoginPage from './pages/Login';
import Register from './pages/Register';
import EditUserProfile from './pages/EditUserProfile';
import RecoverPasswordPage from './pages/RecoverPassword';
import ChangePassword from './pages/ChangePassword';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const uid = Cookies.get('uid');
const accessToken = Cookies.get('accessToken');
const auth = uid && accessToken ? true : false;

console.log(auth);
interface IAppRoutes {
  children: React.ReactNode;
}

function AppRoutes() {
  const ProtectedRoute: React.FC<IAppRoutes> = ({ children }) => {
    const uid = Cookies.get('uid');
    const accessToken = Cookies.get('accessToken');
    const auth = uid && accessToken ? true : false;

    if (!auth) {
      return <Navigate to='/login' />;
    }

    return <>{children}</>;
  };

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <RootLayout>
          <Routes>
            <Route
              path='/user'
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path='/edit'
              element={
                <ProtectedRoute>
                  <EditUserProfile />
                </ProtectedRoute>
              }
            />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/recoverPassword' element={<RecoverPasswordPage />} />
            <Route path='/changePassword' element={<ChangePassword />} />
            <Route index element={<LoginPage />} />
          </Routes>
        </RootLayout>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
