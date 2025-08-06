import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import { routesUnprotected } from "./components/reusable/routes";
import Home from "./pages/Home";
import Navigation from "./components/reusable/Navigation";
import AddBook from "./pages/AddBook";
import SignInForm from "./pages/SignInForm";
import SignupForm from "./pages/SignUpForm";
import { useEffect } from "react";
import { useState } from "react";
import Cookies from 'js-cookie';
import SingleBook from "./pages/SingleBook";
import axios from "axios";
import { AuthProvider, useUserAuth } from "./context/AuthContext.jsx";


function App() {

  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* {
            routesUnprotected.map(item => (
              <Route
                path={item.path}
                element = {item.element}
                key={item.path}
              />
            ))
          } */}
          <Route
            path="/"
            element = {
              <UserLayout el={<Home />} />
                
            }
          />
          <Route
            path="/books/:id"
            element = {
              <UserLayout el={<SingleBook />} />
                
            }
          />
          <Route
            path="/add-book"
            element = {
              <UserLayout
                el={<ProtectedUserRoute><AddBook /></ProtectedUserRoute>}
                // el={<AddBook />}
              />
                
            }
          />
          <Route
            path="/edit-book/:id"
            element = {
              <UserLayout el={<AddBook />} />
                
            }
          />
          <Route
            path="/login"
            element = {
              <UserLayout el={<DisableLoggedINUser><SignInForm /></DisableLoggedINUser>} />
                
            }
          />
          <Route
            path="/register"
            element = {
              <UserLayout el={<DisableLoggedINUser><SignupForm /></DisableLoggedINUser>} />
                
            }
          />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App


const UserLayout = ({ el }) => {
  return (
    <div
      className="space-y-2 max-w-screen-xl mx-auto"
    >
      <Navigation />
      {el}
    </div>
  )
}


const ProtectedUserRoute = ({children}) => {
  
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const user = useUserAuth();
  
  const [loading, setLoading] = useState(true);

  

  useEffect(()=>{
    console.log("Got User", user);
    
    setLoading(false);
  }, [])

  if(loading)
  {
    return(
      <div>
        <h1>
          Loading...
        </h1>
      </div>
    )
  }

  if(!(user.isLoggedIn))
  {
    navigate('/login')
  }

  return(
    <>
      {children}
    </>
  )
}



const DisableLoggedINUser = ({children}) => {
  
  const navigate = useNavigate();
  // const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const user = useUserAuth();

  useEffect(()=>{
    console.log("useUserAuth", user);
    if(user.isLoggedIn)
      {
        navigate('/');
      }
      setLoading(false)
  }, [])

  if(loading)
  {
    return(
      <div>
        <h1>
          Loading...
        </h1>
      </div>
    )
  }
  return(
    <>
      {children}
    </>
  )
}
