import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const ApiContext = createContext(null);

export function useApi() {
  return useContext(ApiContext);
}

interface IApi {
  children: React.ReactNode;
}

interface IUserData  {
  name?: string;
  email?: string;
  password?: string;
  birthDate?: number;
  country?: string;
  profession?: string;
  relationship?: string;
};

export const ApiProvider: React.FC<IApi> = ({ children }) => {
  const [userData, setUserData] = useState<IUserData>();

  useEffect(() => {
    const uid = Cookies.get('uid');
    const accessToken = Cookies.get('accessToken');
    if (uid) {
      fetch(`http://localhost:3333/users/${uid}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then(res => res.json())
        .then(data => setUserData(data));
    }
  }, []);

  return <ApiContext.Provider value={userData}>{children}</ApiContext.Provider>;
};
