// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// Create the context
const UserContext = createContext({
    user: {},
    isLoggedIn: false
});

const LogInUser = createContext(()=>{});
const LogOutUser = createContext(()=>{});

// AuthProvider component to wrap around parts of the app that need access
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  // const navigate = useNavigate();

  // Simulate checking if the user is logged in (e.g., from localStorage or API)
  const checkLoggedInUser = async () => {
  try {
    const res = await axios.get('/api/user/auth/me',{}, { withCredentials: true });
    setUser(res.data.data);
    setIsLoggedIn(true);
  } catch (e) {
    console.log(e);
  }
};

  useEffect(() => {
    checkLoggedInUser();
  }, []);

  const login = async (email, password) => {
    try
    {
      const url = `/api/user/login`;
      const data = {
        email,
        password,
      }
      
      const response = await axios.post(url, data, { withCredentials: true })
      setUser(response.data.data.user);
      setIsLoggedIn(true)
      console.log(response);
      // navigate('/')
    }
    catch(e)
    {
      console.log(e)
    }
  };

  const logout = async () => {
    const url = `/api/user/logout`
    await axios.post(url, {}, {
        withCredentials: true
    })
    .then((res)=>{
        console.log(res);
        setUser({});
        setIsLoggedIn(false);
    })
    .catch(e => {
        console.log(e);
        console.log("failed to logout user")
    })
  }

  return (
    <UserContext.Provider value={{user, isLoggedIn}}>
      <LogInUser.Provider value={login}>
        <LogOutUser.Provider value={logout}>
            {children}
        </LogOutUser.Provider>
      </LogInUser.Provider>
    </UserContext.Provider>
  );
};


export const useUserAuth = () => useContext(UserContext);
export const useLogin = () => useContext(LogInUser);
export const useLogout = () => useContext(LogOutUser);