import { BrowserRouter, Outlet, Route, Routes, useNavigate } from "react-router-dom";
// import { routesUnprotected } from "./components/reusable/routes";
import Home from "./pages/Home";
import Navigation from "./components/reusable/Navigation";
import AddBook from "./pages/AddBook";
import SignInForm from "./components/reusable/SignInForm.jsx";
import SignupForm from "./components/reusable/SignUpForm.jsx";
import { useEffect } from "react";
import { useState } from "react";
import Cookies from 'js-cookie';
import SingleBook from "./pages/SingleBook";
import axios from "axios";
import { AuthProvider, useUserAuth } from "./context/AuthContext.jsx";
import { Theme } from "@radix-ui/themes";
import Page404 from "./pages/Page404.jsx";


function App() {

  return (
    <div className="bg-background min-h-screen">
      <AuthProvider>
        <Theme accentColor="indigo" >
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
            path="/admin"
            element = {
              <ProtectedAdminRoute />  
            }
          >
            <Route index
            element = {
              <AddBook />
            }
            />
            <Route path="books"
            element = {
              <AddBook />
            }
            />
            </Route>
          <Route
            path="/edit-book/:id"
            element = {
              <UserLayout el={<AddBook />} />
                
            }
          />

          <Route
            path="/page-404"
            element = {
              <UserLayout el={<Page404 />} />
                
            }
          />
          <Route
            path="/*"
            element = {
              <UserLayout el={<Page404 />} />
                
            }
          />
          {/* <Route
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
          /> */}
        </Routes>
      </BrowserRouter>
      </Theme>
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


const ProtectedAdminRoute = ({children}) => {
  
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
    navigate('/page-404')
  }
  if(!(user.user.role !== "Admin"))
  {
    navigate('/');
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
    <div>
      This is the admin route
    </div>
      <Outlet />
    </>
  )
}
