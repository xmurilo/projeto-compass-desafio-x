import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';
import UserProfile from './pages/UserProfile';
import GlobalStyle from './styles/globalStyles';
import LoginPage from './pages/Login';
import Register from './pages/Register';
import EditUserProfile from './pages/EditUserProfile';
import RecoverPasswordPage from './pages/RecoverPassword';
import ChangePassword from './pages/ChangePassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'user',
        element: <UserProfile />,
      },
      { path: 'login', element: <LoginPage /> },
      { path: 'edit', element: <EditUserProfile /> },
      { path: 'register', element: <Register /> },
      { path: 'recoverPassword', element: <RecoverPasswordPage /> },
      { path: 'changePassword', element: <ChangePassword /> },
      { path: '/', element: <LoginPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
