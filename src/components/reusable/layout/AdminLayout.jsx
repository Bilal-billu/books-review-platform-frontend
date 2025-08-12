import { useState, useEffect } from "react";
import { useUserAuth, useLogout, useUserLoaded } from "../../../context/AuthContext";
import { useNavigate, Outlet } from "react-router-dom";
import LoadingSkeleton from "../loading/LoadingSkeleton";
import { Loading } from "../loading/Loading";


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



const ProtectedAdminRoute = ({ children }) => {
  const navigate = useNavigate();
  const user = useUserAuth();
  const logout = useLogout();
  const loading = useUserLoaded();

  useEffect(() => {
  if (loading) return;

  console.log("Got User", user);

  if (!user?.isLoggedIn || user?.user?.role !== "Admin") {
    navigate('/page-404');
  }
//   else if (user?.user?.role !== "Admin") {
//     navigate('/page-404');
//   }
}, [user, loading]);


  const navigateTo = (path) =>
  {
    navigate(path)
    console.log(path)
  }


  if (loading) {
    return (
      <LoadingSkeleton>
        <Loading />
      </LoadingSkeleton>
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



export default ProtectedAdminRoute