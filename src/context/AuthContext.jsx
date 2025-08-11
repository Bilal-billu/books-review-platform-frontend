// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { toastErrorsProps, toastSuccessProps } from '../components/reusable/toast/toastStyles';
// import { useNavigate } from 'react-router-dom';

// Create the context
const UserContext = createContext({
    user: {},
    isLoggedIn: false
});
const UserLoaded = createContext(true);

const LogInUser = createContext(()=>{});
const LogOutUser = createContext(()=>{});

// AuthProvider component to wrap around parts of the app that need access
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true)
  // const navigate = useNavigate();

  // Simulate checking if the user is logged in (e.g., from localStorage or API)
  const checkLoggedInUser = async () => {
  try {
    const res = await axios.get('/api/user/auth/me',{}, { withCredentials: true });
    setUser(res.data.data);
    setIsLoggedIn(true);
    toast.success("Verified user", {...toastSuccessProps})
  } catch (e) {
    console.log(e);
  }
  finally
  {
    setLoading(false)
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
      // throw("sas")
      
      const response = await axios.post(url, data, { withCredentials: true })
      console.log(response)
      setUser(response.data.data.user);
      setIsLoggedIn(true)
      console.log(response);
      toast.success("Logged in user successfully", {...toastSuccessProps})
      // navigate('/')
    }
    catch(e)
    {
      console.log(e)
      toast.error("Could not login", {...toastErrorsProps})
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
        toast.success("Logged out user successfully", {...toastSuccessProps})
    })
    .catch(e => {
        console.log(e);
        console.log("failed to logout user")
        toast.error("Could not logout", {...toastErrorsProps})
    })
  }

  return (
    <UserContext.Provider value={{user, isLoggedIn}}>
      <LogInUser.Provider value={login}>
        <LogOutUser.Provider value={logout}>
          <UserLoaded.Provider value={loading}>
            {children}
          </UserLoaded.Provider>
        </LogOutUser.Provider>
      </LogInUser.Provider>
    </UserContext.Provider>
  );
};


export const useUserAuth = () => useContext(UserContext);
export const useLogin = () => useContext(LogInUser);
export const useLogout = () => useContext(LogOutUser);
export const useUserLoaded = () => useContext(UserLoaded);