import { BrowserRouter, Outlet, Route, Routes, useNavigate } from "react-router-dom";
// import { routesUnprotected } from "./components/reusable/routes";
import Home from "./pages/Home";
import Navigation from "./components/reusable/Navigation";
import AdminBooks from "./pages/AdminBooks.jsx";
import SignInForm from "./components/reusable/SignInForm.jsx";
import SignupForm from "./components/reusable/SignUpForm.jsx";
import { useEffect } from "react";
import { useState } from "react";
import Cookies from 'js-cookie';
import SingleBook from "./pages/SingleBook";
import axios from "axios";
import { AuthProvider, useLogout, useUserAuth } from "./context/AuthContext.jsx";
import { Theme } from "@radix-ui/themes";
import Page404 from "./pages/Page404.jsx";
import AdminUsers from "./pages/AdminUsers.jsx";


function App() {

  return (
    <div className="bg-theme-background min-h-screen px-10">
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
              <AdminBooks />
            }
            />
            <Route path="books"
            element = {
              <AdminBooks />
            }
            />

            <Route path="user"
            element = {
              <AdminUsers />
            }
            />
            
            </Route>
          

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


const ProtectedAdminRoute = ({ children }) => {
  const navigate = useNavigate();
  const user = useUserAuth();
  const logout = useLogout();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Got User", user);

    if (!user.isLoggedIn) {
      navigate('/page-404');
    } else if (user.user.role !== "Admin") {
      navigate('/');
    } else {
      setLoading(false);
    }
  }, [user]);

  const navigateTo = (path) =>
  {
    navigate(path)
    console.log(path)
  }


  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <div>
        
  <button
    data-drawer-target="default-sidebar"
    data-drawer-toggle="default-sidebar"
    aria-controls="default-sidebar"
    type="button"
    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span className="sr-only">Open sidebar</span>
  </button>

  <aside
    id="default-sidebar"
    className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
      <ul className="space-y-2 font-medium text-theme-primary">
  {navItems.map((item, index) => (
    <li key={index}>
      <button onClick = {()=>{navigateTo(item.path)}} className={`w-full text-start flex justify-start items-center p-2 rounded-lg hover:bg-gray-100 hover:text-theme-primary-hovered group ${item.classes}`}>
        <span className="flex-1 ms-3 whitespace-nowrap">{item.label}</span>
      </button>
    </li>
  ))}
    <li className="">
      <button onClick = {()=>{
        logout();
        navigateTo('/');
      }} className={`w-full text-start flex justify-start items-center p-2 rounded-lg hover:bg-gray-100 hover:text-theme-primary-hovered group`}>
        <span className="flex-1 ms-3 whitespace-nowrap">{`Sign out`}</span>
      </button>
    </li>
</ul>

    </div>
  </aside>

  <div className="p-4 sm:ml-64">
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 min-h-[90vh]">
      <Outlet />
    </div>
  </div>
      </div>
      
    </div>
  );
};

const navItems = [
  {
    classes: "",
    label: "Home",
    path: "/"
  },
  {
    classes: "",
    label: "Books",
    path: "/admin/"
  },
  {
    classes: "",
    label: "Reviews",
    path: "/admin/"
  },
  {
    classes: "",
    label: "Users",
    path: "/admin/user"
  },
  
  // {
  //   classes: "",
  //   label: "Sign Out",
  //   path: "#"
  // }
];



// const DisableLoggedINUser = ({children}) => {
  
//   const navigate = useNavigate();
//   // const [error, setError] = useState();
//   const [loading, setLoading] = useState(true);
//   const user = useUserAuth();

//   useEffect(()=>{
//     console.log("useUserAuth", user);
//     if(user.isLoggedIn)
//       {
//         navigate('/');
//       }
//       setLoading(false)
//   }, [])

//   if(loading)
//   {
//     return(
//       <div>
//         <h1>
//           Loading...
//         </h1>
//       </div>
//     )
//   }
//   return(
//     <>
//     <div>
//       This is the admin route
//     </div>
//       <Outlet />
//     </>
//   )
// }
