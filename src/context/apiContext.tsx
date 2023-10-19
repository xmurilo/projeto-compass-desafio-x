import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const ApiContext = createContext<IUserData>({} as IUserData);

export function useApi() {
  const context = useContext(ApiContext);

  return context;
}

interface IApi {
  children: React.ReactNode;
}

interface IUserData {
  name: string;
  email: string;
  password: string;
  birthDate: number;
  country: string;
  profession: string;
  relationship: string;
}

export const ApiProvider: React.FC<IApi> = ({ children }) => {
  const [userData, setUserData] = useState<IUserData>({} as IUserData);

  useEffect(() => {
    const uid = Cookies.get('uid');
    const accessToken = Cookies.get('accessToken');

    if (uid && accessToken) {
      fetch(`http://localhost:3333/users/${uid}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then(data => {
          // console.log(data);
          setUserData(data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);

  return <ApiContext.Provider value={userData}>{children}</ApiContext.Provider>;
};
